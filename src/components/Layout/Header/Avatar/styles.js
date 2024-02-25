import { css } from "@emotion/react";

const styles = {
  div: css`
    display: flex;
    gap: 8px;
    justify-contents: center;
  `,

  imgWrapper: css`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
  `,

  image: css`
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `,

  p: css`
    display: block;
    font-weight: 400;
    font-size: 14px;
    position: relative;
    top: 4px;

    @media screen and (375px <= width <= 767px) {
      display: none;
    }
  `,

  btn: css`
    display: block;
  `,
};
export default styles;
