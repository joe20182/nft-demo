import { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Club from './Club'

const Home: FC<RouteComponentProps> = () => {
  return (
    <div className="Home-wrapper">
      <Club />
    </div>
  )
}

export default Home
