import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  text-decoration: none;
}

.red {
  color: #ff5b56;
}

.white {
  color: #ffffff;
}

.black {
  color: #111322;
}
.primary {
  color: #6d6afe;
}

.black {
  color: #111322;
}

.black-bg {
  background-color: #111322;
}

.gray-ton1 {
  color: #3e3e43;
}

.gray-ton2 {
  color: #9fa6b2;
}

.gray-ton3 {
  color: #ccd5e3;
}

.gray-ton4 {
  color: #e7effb;
}

.gray-ton5 {
  color: #f0f6ff;
}

`;

export default GlobalStyle;
