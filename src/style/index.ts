import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Syne Mono';
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    /* font-family: 'Syne Mono'; */
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
`
