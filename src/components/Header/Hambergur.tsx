import { FC } from 'react'
import { HamWrapper, HamBar } from './style'

interface Props {
  clickEvent?: () => void
}

const Hamburger: FC<Props> = ({ clickEvent }) => {
  return (
    <HamWrapper onClick={clickEvent}>
      <HamBar />
      <HamBar />
      <HamBar />
    </HamWrapper>
  )
}

export default Hamburger
