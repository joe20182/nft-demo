import { FC, useState } from 'react'
import LogoImg from '@/assets/img/logo.png'
import { Logo, HeaderWrapper, NavWrapper, NavItem } from './style'
import Hamburger from './Hambergur'

const Header: FC = () => {
  const [hamToggled, setHamToggled] = useState(false)

  const handleToggle = () => {
    setHamToggled(!hamToggled)
  }

  return (
    <HeaderWrapper className="header">
      <Logo src={LogoImg} alt="" />
      <NavWrapper className={hamToggled ? 'toggled' : ''}>
        <NavItem>THE CLUB</NavItem>
        <NavItem>THE TEAM</NavItem>
        <NavItem>ROADMAP</NavItem>
        <NavItem>MINT</NavItem>
      </NavWrapper>
      <Hamburger clickEvent={handleToggle} />
    </HeaderWrapper>
  )
}

export default Header
