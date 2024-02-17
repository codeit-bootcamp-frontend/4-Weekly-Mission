/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "./Card";
import "../../../styles/common.css";

const Cards = ({ items }) => {
  return (
    <div css={divCss}>
      {items?.map((item) => (
        <Card item={item} key={item.id} css={liCss} />
      ))}
    </div>
  );
};

export default Cards;

const liCss = css`
  list-style: none;
`;
const divCss = css`
  display: grid;
  grid-template-columns: 340px 340px 340px;
  justify-content: center;
  gap: 40px;

  width: 100%;
  margin-top: 40px;

  @media screen and (width < 1124px) {
    grid-template-columns: 340px 340px;
  }
  @media screen and (375px <= width <= 767px) {
    grid-template-columns: 340px;
  }
`;
