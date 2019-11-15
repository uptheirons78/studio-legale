import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;

    @media (max-width: 520px) {
    font-size: 1.5rem;
    }
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3.2rem;
  }
  h3 {
    font-size: 2.6rem;
  }
  h4 {
    font-size: 2rem;
    color: ${props => props.theme.primaryColor}
  }

  p {

    &:not(:nth-child(1)) {
    margin-top: 1.5rem;
    }
    color: ${props => props.theme.black};
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
    /* box-shadow: 0px -2px 0px 0px ${props => props.theme.primaryColor} inset;
    transition: all 150ms ease-in-out;

    &:hover {
      box-shadow: 0px -20px 0px 0px ${props => props.theme.primaryColor} inset;
      color: ${props => props.theme.white};
    } */
  }

  strong, b {
    color: ${props => props.theme.primaryColor};
  }
  .button {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: ${props => props.theme.white};
    background: ${props => props.theme.primaryColor};
    padding: 0.3rem 0.7rem;
    transition: all 350ms ease-in-out;

    &::after {
      content: '>';
      margin-left: 5px;
      display: none;
    }

    &:hover {
      letter-spacing: 3px;

      &::after {
        display: inline-block;
      }
    }
  }

  .background {
    min-height: 40vh;
    background-position: center;
    background-size: cover;
    opacity: 1 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(34, 34, 34, 0.5);
  }

  .contentful-markdown {

    img {
    display: block;
    max-width: 600px;
    width: 100%;
    margin: 2rem auto;
    }
  }
`;

export default GlobalStyle;
