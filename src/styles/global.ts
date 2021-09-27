import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
  }

  button, input {
    font-family: 'Roboto', sans-serif;
    border: none;
  }

  button { cursor: pointer;}
`;
