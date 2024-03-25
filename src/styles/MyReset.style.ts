import { css } from "styled-components"

export const MyReset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    overflow-x: hidden;
    font-family: "Pretendard";
  }

  body {
    color: var(--black);
    font-weight: 400;
    min-height: 100vh;
    position: relative;
    padding-bottom: 220px;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;
    background: none;
    cursor: pointer;
  }

  input {
    outline: 0;
    border: 0;
  }

  fieldset {
    border: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .ir_so {
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    text-indent: -9999px;
  }

  @media (max-width: 769px) {
    body {
      padding-bottom: 0;
    }
  }
`
