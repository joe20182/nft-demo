import { FC, useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { MintWrapper, ConnectBtn, MintedText, ConnectedWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useContract } from '@/hooks/contract'
import { selectWallet, connect } from '@/store/slice/wallet'

let provider: ethers.providers.Web3Provider
let HHGContract: ethers.Contract

const Mint: FC = () => {
  const wallet = useAppSelector(selectWallet)
  const dispatch = useAppDispatch()
  const [mintedObj, setMintedObj] = useState({ current: 0, total: 0 })

  const [addr, ABI] = useContract()

  // useEffect(() => {
  //   initMetamask()
  // }, [])

  const initMetamask = async () => {
    if (!window.ethereum) {
      alert('Please install metamask')
      return
    }
    provider = new ethers.providers.Web3Provider(window.ethereum)
    return await provider.send('eth_requestAccounts', [])
  }

  const handleConnect = async () => {
    const account = await initMetamask()
    dispatch(
      connect({
        connected: true,
        address: account,
      })
    )
    handleCheckContract()
  }

  const handleCheckContract = async () => {
    HHGContract = new ethers.Contract(addr, ABI, provider)

    try {
      const [current, total] = await Promise.all([
        HHGContract.totalSupply(),
        HHGContract.MAX_SUPPLY(),
      ])

      console.log('QQQ ', current.toNumber(), total.toNumber())
      setMintedObj({
        current: current.toNumber(),
        total: total.toNumber(),
      })
    } catch (error) {
      // wrong network or other cases
      console.log('XXX ', error)
    }
  }

  const handleMint = async () => {
    const signer = provider.getSigner()
    const contract = new ethers.Contract(addr, ABI, signer)

    const options = { value: ethers.utils.parseEther('0.01') }
    try {
      const res = await contract.safeMint(wallet.address[0], options)
      console.log(res)
    } catch (error) {
      console.log('Mint failed')
    }
  }

  return (
    <MintWrapper>
      {wallet.connected ? (
        <ConnectedWrapper>
          <MintedText>{wallet.address[0]}</MintedText>
          <MintedText>
            minted: {mintedObj.current}/{mintedObj.total}
          </MintedText>
          <ConnectBtn onClick={handleMint}>MINT</ConnectBtn>
        </ConnectedWrapper>
      ) : (
        <ConnectBtn onClick={handleConnect}>
          CONNECT
          <br />
          WALLET
        </ConnectBtn>
      )}
    </MintWrapper>
  )
}

export default Mint
