import styled from 'styled-components'
import { rwd } from '@/style/rwd'

export const ClubWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 50vw;
  background-image: linear-gradient(180deg, #34155b, #9024c2 80%);
  ${rwd('sm')(`
    flex-direction: column-reverse;
  `)}
`

export const ClubBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const H1 = styled.h1`
  font-size: 48px;
  border-bottom: 2px solid #000;
  padding-bottom: 30px;
`

export const P = styled.p`
  font-size: 24px;
  padding: 20px 10px;
  line-height: 1.8;
`

export const ManImg = styled.img`
  max-width: 100%;
`
