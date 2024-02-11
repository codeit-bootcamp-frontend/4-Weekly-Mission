import { calculateTime, formatDate } from '../../utils/date';
import { sampleFolderInquire } from 'api/sampleAPI';
import useFetchData from 'hook/useFetchData';
import React from 'react';
import styled from 'styled-components';

const Card = () => {
  const [cardDatas, cardError] = useFetchData(
    sampleFolderInquire,
    data => data,
    // data.folder.links.map(link => ({
    //   ...link,
    //   timePassed: calculateTime(link.createdAt),
    //   formattedDate: formatDate(link.createdAt),
    // })),
  );
  console.log(cardDatas);
  if (cardError) {
    console.log(cardError);
  }

  const handleOnClick = url => {
    window.open(url, '_blank');
  };
  const handleOnError = e => {
    e.target.src = '/images/noImage.png';
  };
  return (
    <CardContainer>
      {cardDatas.map(cardData => (
        <StyledCard
          key={cardData.id}
          href={cardData.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardImg
            src={cardData.imageSource}
            alt={cardData.title}
            onClick={handleOnClick(cardData.links.url)}
            onError={handleOnError}
          />
          <TextContainer>
            <span>{cardData.timePassed}</span>
            <P>{cardData.description}</P>
            <P className="date">{cardData.formattedDate}</P>
          </TextContainer>
        </StyledCard>
      ))}
    </CardContainer>
  );
};
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 375px) and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const StyledCard = styled.a`
  width: 340px;
  height: 334px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
`;
const CardImg = styled.img`
  width: 100%;
  height: 178px;
  border-radius: 15px;
  object-fit: cover;
  transition: transform 0.3s ease;
  :hover {
    transform: scale(1.3);
  }
`;

const TextContainer = styled.p`
  padding: 10px 20px;
  text-align: start;
  height: 135px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    color: #666666;
    font-size: 13px;
  }
  .date {
    color: #333333;
    font-size: 14px;
  }
`;
const P = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default Card;
