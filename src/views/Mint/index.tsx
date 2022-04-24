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
  const [minting, setMinting] = useState(false)

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

  const switchToRinkeby = async () => {
    const chainId = 4
    const hexedChainId = '0x4'
    // const hexedChainId = ethers.utils.hexlify(chainId)

    if (window.ethereum.networkVersion === chainId) {
      return true
    }
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: hexedChainId }],
      })
      return true
    } catch (err) {
      alert('Please check if you have added Rinkeby testnet to your metamask')
      return false
    }
  }

  const initMetamask = async () => {
    if (!window.ethereum) {
      alert('Please install metamask')
      return
    }
    const switched = await switchToRinkeby()
    if (!switched) return

    provider = new ethers.providers.Web3Provider(window.ethereum, 4)
    return await provider.send('eth_requestAccounts', [])
  }

  const handleConnect = async () => {
    const account = await initMetamask()
    if (!account) return

    dispatch(
      connect({
        connected: true,
        address: account,
      })
    )
    handleCheckContract()
  }

  const handleCheckContract = async () => {
    const signer = provider.getSigner()
    HHGContract = new ethers.Contract(addr, ABI, signer)

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
    const options = { value: ethers.utils.parseEther('0.01') }
    try {
      const res = await HHGContract.safeMint(wallet.address[0], options)
      // console.log(res)
      // console.log(res.hash)
      setMinting(true)

      const comfirmed = await provider.waitForTransaction(res.hash)
      // The status of a transaction is 1 is successful or 0 if it was reverted
      // console.log('OK???', comfirmed)
      if (comfirmed.status === 1) {
        alert('Minted successfully!')
        setMinting(false)
        handleCheckContract()
      }
    } catch (error) {
      console.log('Mint failed', error)
      setMinting(false)
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
            <ConnectBtn onClick={handleMint} disabled={minting}>
              {minting ? 'MINTING...' : 'MINT'}
            </ConnectBtn>
          ) : (
            <ConnectBtn disabled>SOLD OUT</ConnectBtn>
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
