import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
    border:none;
  }
body{
    font-family: sans-serif;
    background: var(--color-gray-100);
    margin: 0;
    width:100vw;
    height:100vh;
}

  #root{
    display:flex;
    align-items: center;
    flex-direction:column;
    width:100vw;
    height:100vh;

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

  ul{
    list-style-type:none;
}

@media screen and (width >375px) and (width <768px) {
  html {
    font-size: 12px;
  }
}

@media screen and (width >768px) and (width <1200px) {
  html {
    font-size: 14px;
  }
}

@media screen and (width >1200px) {
  html {
    font-size: 16px;
  }
}
`;
//
