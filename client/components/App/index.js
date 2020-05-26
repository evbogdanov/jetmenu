import React, { StrictMode } from 'react'
import Menu from '../Menu'
import { GlobalStyle, Main } from './styled'

function App() {
  return (
    <StrictMode>
      <GlobalStyle />
      <Main>
        <Menu />
      </Main>
    </StrictMode>
  )
}

export default App
