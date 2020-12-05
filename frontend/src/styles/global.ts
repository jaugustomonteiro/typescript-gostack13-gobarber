import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312e38;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-family: 'Roboto Slab', serif;
    font-size: 16;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button: {
    cursor: pointer;
  }
`;
