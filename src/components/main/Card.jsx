import { calculateTime } from '@utils/data';
import { sampleFolderInquire } from 'api/sampleAPI';
import React from 'react';
import styled from 'styled-components';

const Card = () => {
  const [cardData, cardError] = useFetchData(sampleFolderInquire, data =>
    data.folder.links.map(link => ({
      ...link,
      timePassed: calculateTime(link.createdAt),
      formattedDate: formatDate(link.createdAt),
    })),
  );

  if (cardError) {
    console.log(cardError);
  }
  return (
    <CardContainer>
      {data.map(cardData => (
        <a
          key={cardData.id}
          href={cardData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img
            src={cardData.imageSource || noCardImg}
            alt={cardData.title}
            className="card-image"
            onError={handleImageError}
          />
          <p className="text-container">
            <span>{cardData.timePassed}</span>
            <p>{cardData.description}</p>
            <p className="date-number">{cardData.formattedDate}</p>
          </p>
        </a>
      ))}
    </CardContainer>
  );
};
const CardContainer = styled.div``;
export default Card;
