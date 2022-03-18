import { FC } from 'react'
import { TeamWrapper, H1, P } from './style'

const Team: FC = () => {
  return (
    <TeamWrapper id="team">
      <H1 border="#fff">THE TEAM</H1>
      <P>
        Well...
        <br />
        Basically there is no team behind, there is only me :)
        <br />
        Just to clearify again, this is just a project for me to practice some
        frontend stuff and also solidity.
        <br />I wrote some shitty code based on the OpenZeppelin ERC721
        contract.
      </P>
    </TeamWrapper>
  )
}

export default Team
