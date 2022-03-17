import { FC } from 'react'
import { MintWrapper, ConnectBtn } from './style'

const Mint: FC = () => {
  return (
    <MintWrapper>
      <ConnectBtn>
        CONNECT
        <br />
        WALLET
      </ConnectBtn>
    </MintWrapper>
  )
}

export default Mint
