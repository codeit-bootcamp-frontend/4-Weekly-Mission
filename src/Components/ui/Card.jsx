import React from "react";
import styled from "styled-components";
import { formatDate, formatDateAgo } from "../../utils/DateUtils";

const Card = styled.div`
  width: 340px;
  height: 334px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: Pretendard;
`;

const ImageBox = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Star = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Main = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardContent = styled.div`
  min-height: 50px;
`;

const CardFooter = styled.div``;

const CreatedAt = styled.p`
  color: #666;
  font-size: 13px;
  font-weight: 400;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const Time = styled.p`
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
`;

function CardItem({ cardData }) {
  const {
    created_at: createdAt,
    description,
    image_source,
    url,
  } = cardData;

  const cardDate = formatDate(createdAt);
  const cardCreatedAt = formatDateAgo(createdAt);

  return (
    <Card>
      <ImageBox>
        <Image
          src={image_source || `/Images/default.png`}
          alt="card_Image"
        />
        <Star src="/Icons/star.svg" alt="star" />
      </ImageBox>
      <Main>
        <CardHeader>
          <CreatedAt>{cardDate}</CreatedAt>
          <img src="/Icons/kebab.png" alt="kebab" />
        </CardHeader>
        <CardContent>
          <Description>{description}</Description>
        </CardContent>
        <CardFooter>
          <Time>{cardCreatedAt}</Time>
        </CardFooter>
      </Main>
    </Card>
  );
}

export default CardItem;
