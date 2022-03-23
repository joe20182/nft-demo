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
  //   if (window.ethereum !== 'undefined') {
  //     window.ethereum.on('accountsChanged', () => {
  //       console.log('accountsChanged !')
  //     })
  //   }
  // }, [])

  // 換頁進來重新取值
  useEffect(() => {
    if (wallet.connected) {
      handleCheckContract()
    }
  }, [])

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

    // const filter = {
    //   address: addr,
    //   topics: [
    //     // the name of the event, parnetheses containing the data type of each event, no spaces
    //     ethers.utils.id('safeMint(address)'),
    //   ],
    // }
    // provider.on(filter, (qqq) => {
    //   // do whatever you want here
    //   // I'm pretty sure this returns a promise, so don't forget to resolve it
    //   console.log(12321, qqq)
    // })

    try {
      const [current, total] = await Promise.all([
        HHGContract.totalSupply(),
        HHGContract.MAX_SUPPLY(),
      ])

      // console.log('QQQ ', current.toNumber(), total.toNumber())
      setMintedObj({
        current: current.toNumber(),
        total: total.toNumber(),
      })
    } catch (error) {
      // wrong network or other cases
      console.log('XXX ', error)
      alert('Please switch to rinkeby testnet and refresh!')
    }
  }

  const handleMint = async () => {
    const signer = provider.getSigner()
    const contract = new ethers.Contract(addr, ABI, signer)

    const options = { value: ethers.utils.parseEther('0.01') }
    try {
      const res = await contract.safeMint(wallet.address[0], options)
      // console.log(res)
      // console.log(res.hash)

      const comfirmed = await provider.waitForTransaction(res.hash)
      // The status of a transaction is 1 is successful or 0 if it was reverted
      // console.log('OK???', comfirmed)
      if (comfirmed.status === 1) {
        alert('Minted successfully!')
        handleCheckContract()
      }
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
          {mintedObj.current < mintedObj.total ? (
            <ConnectBtn onClick={handleMint}>MINT</ConnectBtn>
          ) : (
            <ConnectBtn>SOLD OUT</ConnectBtn>
          )}
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
