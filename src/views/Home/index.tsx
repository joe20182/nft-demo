import { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { HomeWrapper } from './style'
import Club from './Club'
import Team from './Team'
import Roadmap from './Roadmap'

const Home: FC<RouteComponentProps> = () => {
  return (
    <HomeWrapper>
      <Club />
      <Team />
      <Roadmap />
    </HomeWrapper>
  )
}

export default Home
