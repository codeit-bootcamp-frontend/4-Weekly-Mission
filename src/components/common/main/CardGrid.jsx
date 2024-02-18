import Loader from '../Loader';
import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { calculateTime, formatDate } from 'utils/date';

/**
 * CardGrid 컴포넌트
 * @param {Object} props
 * @param {Array} props.datas
 * @param {boolean} props.isLoading
 * @param {boolean} props.isFolder
 * @returns {JSX.Element}
 */
const CardGrid = ({ datas, isLoading, isFolder }) => {
  return (
    <CardContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {datas?.map(data => {
            const {
              id,
              createdAt,
              url,
              title,
              description,
              imageSource,
              image_source,
              created_at,
            } = data;

            const timePassed = calculateTime(createdAt || created_at);
            const formattedDate = formatDate(createdAt || created_at);
            return (
              <Card
                key={id}
                url={url}
                title={title}
                description={description}
                imageURL={imageSource || image_source}
                timePassed={timePassed}
                formattedDate={formattedDate}
                isFolder={isFolder}
              />
            );
          })}
        </>
      )}
    </CardContainer>
  );
};
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 375px) and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export default CardGrid;
