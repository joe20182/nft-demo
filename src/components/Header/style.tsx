import styled from 'styled-components'
import { rwd } from '@/style/rwd'

export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`

export const HeaderWrapper = styled.div`
  padding: 10px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

export const NavWrapper = styled.div`
  background-color: #000;
  font-size: 24px;
  ${rwd('sm')(`
    position: fixed;
    top: 120px;
    left: 0;
    width: 100%;
    display: none;
    &.toggled {
      display: block;
    }
  `)}
  ${rwd('md')(`
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    width: auto;
  `)}
`

export const NavItem = styled.div`
  color: #fff;
  padding: 0 20px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    color: #aaa;
  }
  ${rwd('md')(`
    margin-bottom: 0px;
  `)}
`
export const HamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${rwd('md')(`
    display: none;
  `)}
`

export const HamBar = styled.div`
  width: 28px;
  height: 3px;
  border-radius: 1.5px;
  background-color: #fff;
  margin-bottom: 4px;
  &:last-child {
    margin-bottom: 0;
  }
`
