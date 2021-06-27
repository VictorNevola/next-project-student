import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing : antialised;
    background-color: #f7f7f7;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }

    &::-webkit-scrollbar-thumb {
      background: #888; 
    }
  }

  body, html, input, button {
    font-family: 'Roboto', sans-serif;
  }


  h1, h2, h3,h4,h5,h6, strong {
    font-weight: 500;

  }

  li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }`
  ;