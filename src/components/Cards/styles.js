import { css } from "@emotion/react";

const styles = {
  li: css`
    list-style: none;
  `,
  div: css`
    display: grid;
    grid-template-columns: 340px 340px 340px;
    justify-content: center;
    gap: 40px;
    background: var(--Linkbrary-white);
    

    width: 100%;
    margin-top: 40px;

    @media screen and (width < 1124px) {
      grid-template-columns: 340px 340px;
    }
    @media screen and (375px <= width <= 767px) {
      grid-template-columns: 340px;
    }
  `,

  nullDiv: css`
    display: flex;
    justify-content: center;

    height: 100px;
    margin: 40px 0 0 0;
  `,
};

export default styles;
