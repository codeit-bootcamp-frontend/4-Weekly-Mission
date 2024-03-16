import React from 'react';
import noImage from '../images/no-image.png';
import { formatDate, getTimeAgo } from '../utils/utils';

import styled from 'styled-components';

const CardImageItem = styled.img`
  width: 34rem;
  object-fit: cover;

  @media (max-width: 767px) {
    width: 32.5rem;
  }
`;

const CardContainer = styled.div`
  width: 34rem;
  height: 33.4rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 32.5rem;
    height: 32.7rem;
  }

  &:hover {
    border: 2px solid #6d6afe;
    transition: all 0.2s linear;

    ${CardImageItem} {
      transform: scale(1.3);
    }
  }
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  width: 34rem;
  height: 20rem;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 32.5rem;
    height: 19.2rem;
  }
`;

const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1.5rem 2rem;
  font-weight: 400;
`;

const CardDiffTime = styled.div`
  color: #666;
  font-size: 1.3rem;
`;

const CardDescription = styled.div`
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.6rem;
  line-height: 2.4rem;
  height: 4.9rem;
`;

const CardCreatedTime = styled.div`
  color: #333;
  font-size: 1.4rem;
`;

const Card = ({ link }) => {
  const createdAt = link?.createdAt ? link?.createdAt : link?.created_at;
  const description = link?.description;
  const imageSource = link?.imageSource ? link?.imageSource : link?.image_source;
  const title = link?.title;
  const url = link?.url;
  const folderId = link?.folder_id;

  return (
    <CardContainer>
      <a href={url} target="_blank" rel="noreferrer">
        <CardImage>
          <CardImageItem src={imageSource ? imageSource : noImage} alt={title} />
        </CardImage>
        <CardContents>
          <CardDiffTime>{getTimeAgo(createdAt)}</CardDiffTime>
          <CardDescription>{description}</CardDescription>
          <CardCreatedTime>{formatDate(createdAt)}</CardCreatedTime>
        </CardContents>
      </a>
    </CardContainer>
  );
};

export default Card;
