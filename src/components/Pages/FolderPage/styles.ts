import { css } from '@emotion/react'

export const outerDivCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--Linkbrary-white);
`

export const divCss = css`
  background-color: var(--Linkbrary-white);
  padding: 40px;
`

export const btnCss = css`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`

export const visible = css`
  opacity: 1;
`

export const unVisible = css`
  opacity: 0;
`

export const fixedLinkCssDefault = css`
  position: fixed;
  bottom: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`
