import { css } from "@emotion/react";

const styles = {
  div: css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 160px;
    padding: 32px 64px;
    background: var(--Linkbrary-black);
    margin: 0;
  `,
  p: css`
    order: 1;
    margin: 0;
    color: #676767;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media screen and (375px <= width <= 767px) {
      order: 3;
      width: 100%;
      margin-top: 60px;
    }
  `,
  aWrapper: css`
    order: 2;
    display: flex;
    gap: 30px;

    @media screen and (375px <= width <= 767px) {
      order: 1;
    }
  `,
  a: css`
    margin: 0;
    text-decoration: none;
    color: #cfcfcf;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  icons: css`
    order: 3;
    display: flex;
    gap: 12px;
    margin: 0;

    @media screen and (375px <= width <= 767px) {
      order: 2;
    }
  `,
};

export default styles;
