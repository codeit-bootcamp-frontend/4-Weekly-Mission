/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "./Card";
import "../../../styles/common.css";

const liCss = css`
  list-style: none;
`;
const divCss = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

  width: 100%;
  margin-top: 40px;

  @media screen and (width < 1124px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (375px <= width <= 767px) {
    grid-template-columns: 1fr;
  }
`;
const Cards = ({ items }) => {
  return (
    <div css={divCss}>
      {items?.map((item) => (
        <div key={item.id} css={liCss}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
