import { FC, useEffect } from 'react'
import { ethers } from 'ethers'
import { MintWrapper, ConnectBtn, MintedText, ConnectedWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectWallet, connect } from '@/store/slice/wallet'

const Mint: FC = () => {
  const wallet = useAppSelector(selectWallet)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   initMetamask()
  // }, [])

  const initMetamask = async () => {
    if (!window.ethereum) {
      alert('Please install metamask')
      return
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum)
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
  }

  const handleMint = () => alert(1)

  return (
    <MintWrapper>
      {wallet.connected ? (
        <ConnectedWrapper>
          <MintedText>{wallet.address}</MintedText>
          <MintedText>minted: 1/20</MintedText>
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
