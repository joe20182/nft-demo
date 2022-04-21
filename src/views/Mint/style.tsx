import styled from 'styled-components'

export const MintWrapper = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ConnectBtn = styled.button`
  font-size: 36px;
  padding: 20px 40px;
  background-image: linear-gradient(180deg, #571b18, #24091e);
  border: 4px solid #571b18;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  &:disabled {
    background-image: linear-gradient(180deg, #eee, #bbb);
    border: 4px solid #eee;
  }
`

export const MintedText = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  word-break: break-all;
`

export const ConnectedWrapper = styled.div`
  text-align: center;
`
