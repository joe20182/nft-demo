import { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Club from './Club'
import Team from './Team'

const Home: FC<RouteComponentProps> = () => {
  return (
    <div className="Home-wrapper">
      <Club />
      <Team />
    </div>
  )
}

export default Home
