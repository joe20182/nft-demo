import { FC } from 'react'
import { ClubWrapper, ClubBlock, H1, P, ManImg } from './style'
import ManImage from '@/assets/img/man.png'

const Club: FC = () => {
  return (
    <ClubWrapper>
      <ClubBlock>
        <ManImg src={ManImage} />
      </ClubBlock>
      <ClubBlock>
        <H1>JUST FOR FUN</H1>
        <P>
          This is not a real NFT project.
          <br />
          The project is deployed to the Rinkeby testnet, just for fun.
          <br />
          And yes you can mint it!
        </P>
      </ClubBlock>
    </ClubWrapper>
  )
}

export default Club
