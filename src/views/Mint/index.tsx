import { FC } from 'react'
import { MintWrapper, ConnectBtn } from './style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectWallet, connect } from '@/store/slice/wallet'

const Mint: FC = () => {
  const wallet = useAppSelector(selectWallet)
  const dispatch = useAppDispatch()

  const handleConnect = () =>
    dispatch(
      connect({
        connected: true,
        address: 'xx',
      })
    )

  return (
    <MintWrapper>
      {/* <p>{wallet.connected ? 'true' : 'false'}</p>
      <p>{wallet.address}</p> */}
      <ConnectBtn onClick={handleConnect}>
        CONNECT
        <br />
        WALLET
      </ConnectBtn>
    </MintWrapper>
  )
}

export default Mint
