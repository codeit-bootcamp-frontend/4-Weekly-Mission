import styled from 'styled-components';
import React from 'react';
import ReactTimeago from 'react-timeago';
import dayjs from 'dayjs';

const Card = ({ createdAt, url, title, imageURL }) => {
  return (
    <StyledArticle>
      <a href={url}>
        <img src={imageURL || '/undefined-image.jpeg'} alt={title} />
        <div className='textBox'>
          <ReactTimeago className='timeAgo' date={createdAt} locale='ko' />
          <p className='title'>{title}</p>
          <p className='date'>{dayjs(createdAt).format('YYYY-MM-DD')}</p>
        </div>
      </a>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  .textBox {
    margin: 1rem;
  }

  .timeAgo {
    color: var(--color-gray-400);
    font-size: 0.9rem;
  }

  .title {
    margin: 0.6rem 0;
  }

  .date {
    font-size: 0.9rem;
  }

  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 12rem;
    object-fit: cover;
  }

  &:hover {
    scale: 1.3;
    img {
      opacity: 0.8;
    }
  }

  @media screen and (width>1124px) {
    img {
      height: 15rem;
    }
  }
`;

export default Card;
