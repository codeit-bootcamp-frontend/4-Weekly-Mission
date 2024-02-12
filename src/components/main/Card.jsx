import React from 'react';
import styled from 'styled-components';
import defaultImage from '../../assets/images/noImage.png';

const Card = ({ cardDatas }) => {
  return (
    <>
      {cardDatas?.map(cardData => (
        <StyledCard
          key={cardData.id}
          href={cardData.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardImg
            src={cardData.imageSource || defaultImage}
            alt={cardData.title}
          />
          <TextContainer>
            <span>{cardData.timePassed}</span>
            <StyledP>{cardData.description}</StyledP>
            <StyledP className="date">{cardData.formattedDate}</StyledP>
          </TextContainer>
        </StyledCard>
      ))}
    </>
  );
};

const StyledCard = styled.a`
  width: 340px;
  height: 305px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  &:hover {
    background-color: ${props => props.theme.linkbrary_bg};
  }
`;
const CardImg = styled.img`
  width: 100%;
  height: 178px;
  object-fit: cover;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.3);
  }
`;

const TextContainer = styled.div`
  padding: 10px 20px;
  text-align: start;
  height: 135px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    color: #666666;
    font-size: 13px;
  }
  .date {
    color: #333333;
    font-size: 14px;
  }
`;
const StyledP = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  color: black;
`;
export default Card;
