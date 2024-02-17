import Loader from '../Loader';
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardGrid = ({ datas, isLoading }) => {
  return (
    <CardContainer>
      {isLoading ? <Loader /> : <Card cardDatas={datas} />}
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
