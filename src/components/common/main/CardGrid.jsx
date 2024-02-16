import Loader from '../Loader';
import { calculateTime, formatDate } from 'utils/date';
import { useSampleFolderQuery } from 'hook/useFetchData';
import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import CardError from './CardError';

const CardGrid = () => {
  const {
    data: cardDatas,
    isLoading,
    isError,
  } = useSampleFolderQuery('cardDatas', data =>
    data?.folder.links.map(link => ({
      ...link,
      timePassed: calculateTime(link.createdAt),
      formattedDate: formatDate(link.createdAt),
    })),
  );

  if (isError) {
    return <CardError />;
  }

  return (
    <CardContainer>
      {isLoading ? <Loader /> : <Card cardDatas={cardDatas} />}
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
