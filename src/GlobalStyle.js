import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #6d6afe;
    --red-color: #ff5b56;
    --black-color: #111322;
    --white-color: #ffffff;
    --gray100-color: #3e3e43;
    --gray60-color: #9fa6b2;
    --gray20-color: #ccd5e3;
    --gray10-color: #e7effb;
    --background-color: #f0f6ff;
    --gra-purpleblue-to-skyblue: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    --Fandom-K-gra-blue-to-pink: linear-gradient(271deg, #fe578f -9.84%, #68e8f9 107.18%);
  }

  body {
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }
`;

export default GlobalStyle;
