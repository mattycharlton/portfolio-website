import React from 'react'
import Banner from './sections/Banner'
//import About from './sections/About'
import GlobalStyle, { GlobalWrapper } from './styles/Global.styled'

const App = () => (
  <GlobalWrapper>
    <GlobalStyle />
    <Banner />
    {/*     <About /> */}
  </GlobalWrapper>
)

export default App
