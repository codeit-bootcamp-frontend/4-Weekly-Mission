import { convertTime, formatDate } from "../../utils/convertTime";
import { useState } from "react";
import { CardImage } from "../image/cardImage";
import { KebabMenu } from "./kebab";
import styled from "styled-components";

const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardContianer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 106rem;
  row-gap: 2rem;
  column-gap: 25px;
  justify-content: center;

  a {
    text-decoration: none;
  }
  @media (769px< width < 1124px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2.5rem;
    column-gap: 2rem;
  }
  @media (width < 768px) {
    grid-template-columns: repeat(auto-fill, 34rem);
    row-gap: 2.5rem;
    column-gap: 2rem;
  }
`;

export const FolderCard = ({ data }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`card ${isHover ? "card-hover" : ""}`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <a href={data?.url} target="blank">
        <CardImage src={data?.imageSource} alt={data?.imageSource} />
        <div className="descriptionBox">
          <TimeBox>
            <div className="timeText">{convertTime(data?.createdAt)}</div>
            <KebabMenu />
          </TimeBox>
          <div className="cardDescription">{data?.description}</div>
          <div className="dateText">{formatDate(data?.createdAt)}</div>
        </div>
      </a>
    </div>
  );
};

export const FavoriteCard = ({ data }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`card ${isHover ? "card-hover" : ""}`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <a href={data?.url} target="blank">
        <CardImage src={data?.image_source} alt={data?.image_source} />
        <div className="descriptionBox">
          <TimeBox>
            <div className="timeText">{convertTime(data?.created_at)}</div>
            <KebabMenu />
          </TimeBox>
          <div className="cardDescription">{data?.description}</div>
          <div className="dateText">{formatDate(data?.created_at)}</div>
        </div>
      </a>
    </div>
  );
};
