import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    /* 62.5% => 10rem, 1rem = 10px */
    font-size: 62.5% !important;
    line-height: 1.285;
    display: flex;
    flex-direction: column;
  }
  a {
    text-decoration: none;
  }
  ul,
  ol {
    list-style: none;
  }
  textarea {
    resize: none;
  }
  button {
    cursor: pointer;
    border: 0;
  }
`;
export default GlobalStyle;
