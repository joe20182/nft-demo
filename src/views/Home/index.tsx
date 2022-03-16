import { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { HomeWrapper } from './style'
import Club from './Club'
import Team from './Team'

const Home: FC<RouteComponentProps> = () => {
  return (
    <HomeWrapper>
      <Club />
      <Team />
    </HomeWrapper>
  )
}

export default Home
