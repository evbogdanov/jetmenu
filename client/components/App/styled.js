import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }

  ul {
    list-style-type: none;
  }
`

export const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
`
