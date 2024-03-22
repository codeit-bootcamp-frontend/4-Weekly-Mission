import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from 'styles/theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
  
  html{
    font-size: 62.5%;
  }
  
  
  body {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${theme.color.body};
    max-width: 100%;
    min-height: calc(var(--vh, 1vh) * 100);
    overflow-x: hidden;
    background-color: ${theme.color.white};
    text-underline-position: under;
  }
  
  button {
    padding: 0;
    border: none;
    cursor: pointer;
  background: transparent;
  }
  
   a {
    text-decoration: none;
    color: inherit;
  }
   
   input {
     outline: none;
   }
   
`;

export default GlobalStyle;
