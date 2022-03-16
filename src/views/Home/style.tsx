import styled from 'styled-components'
import { rwd } from '@/style/rwd'

export const HomeWrapper = styled.div`
  padding-top: 120px;
`

export const ClubWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 50vw;
  background-image: linear-gradient(180deg, #34155b, #9024c2 80%);
  padding: 40px 20px;
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

export const H1 = styled.h1<{ border?: string }>`
  font-size: 48px;
  border-bottom: ${(props) => `2px solid ${props.border || '#000'}`};
  padding-bottom: 30px;
  margin-bottom: 30px;
`

export const P = styled.p`
  font-size: 24px;
  padding: 20px 10px;
  line-height: 1.8;
`

export const ManImg = styled.img`
  max-width: 100%;
`

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 40px;
  color: #fff;
  background-image: linear-gradient(180deg, #571b18, #24091e);
  ${rwd('sm')(`
    padding: 60px 20px;
  `)}
`

export const RoadmapWrapper = styled.div`
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b2b54;
`
