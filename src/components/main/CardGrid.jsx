import Loader from '../common/Loader';
import { calculateTime, formatDate } from '../../utils/date';
import { sampleFolderInquire } from 'api/sampleAPI';
import useFetchData from 'hook/useFetchData';
import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Error from '../common/Error';

const CardGrid = () => {
  const {
    data: cardDatas,
    isLoading,
    isError,
  } = useFetchData(sampleFolderInquire, 'cardDatas', data =>
    data?.folder.links.map(link => ({
      ...link,
      timePassed: calculateTime(link.createdAt),
      formattedDate: formatDate(link.createdAt),
    })),
  );

  if (isError) {
    return <Error />;
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
  gap: 20px;

  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 375px) and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export default CardGrid;
