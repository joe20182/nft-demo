import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
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
      <Link to="/">
        <Logo src={LogoImg} alt="" />
      </Link>
      <NavWrapper className={hamToggled ? 'toggled' : ''}>
        <NavItem>THE CLUB</NavItem>
        <NavItem>THE TEAM</NavItem>
        <NavItem>ROADMAP</NavItem>
        <Link to="/mint">
          <NavItem>MINT</NavItem>
        </Link>
      </NavWrapper>
      <Hamburger clickEvent={handleToggle} />
    </HeaderWrapper>
  )
}

export default Header
