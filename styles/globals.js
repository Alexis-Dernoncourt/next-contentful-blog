import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { mobile } from './responsive';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Roboto';
    font-size: 1.6rem;
    cursor: default;
  }
  h1,h2,h3 {
    font-family: 'Lobster', cursive;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
    ${mobile({fontSize: '2.2rem'})};
  }
  h4 {
    font-size: 2rem;
    ${mobile({fontSize: '1.6rem'})};
  }
  a {
    text-decoration: none;
    color: unset;
  }
  li{
    list-style: none;
  }
  p{
    font-size: 1.6rem;
    margin: 2rem 0;
    ${mobile({fontSize: '1.4rem'})};
  }
`;

export default GlobalStyles;
