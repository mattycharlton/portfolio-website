import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        font-family: 'Merriweather', serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #fff;
        text-align: left;
        background-color: #fff;
    }

    a {
        text-decoration: none;
    }

    h1,h2,h3 {
        font-weight: 900;
    }
`;

export default GlobalStyle;
