import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Merriweather', serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #fff;
        background-color: #fff;
        overflow: hidden;
    }

    a {
        text-decoration: none;
    }

    h1,h2,h3 {
        font-weight: 900;
    }
`

export const GlobalWrapper = styled.div`
  overflow: scroll;
  height: 100vh;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y proximity;
`

export default GlobalStyle
