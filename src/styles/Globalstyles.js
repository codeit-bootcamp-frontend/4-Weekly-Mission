import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  body{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin: 0;
    font-family: sans-serif;
    background: var(--color-gray-100);
}

  :root{
    --color-primary: #6d6afe;
    --color-red: #ff5b56;
    --color-black: #111322;
    --color-white: #fff;
    --color-gray-100: #f0f6ff;
    --color-gray-200: #e7effb;
    --color-gray-300: #ccd5e3;
    --color-gray-400: #9fa6b2;
    --color-gray-500: #3e3e43;
  }

  a{
    color:inherit;
    text-decoration:none;
  }
`;
