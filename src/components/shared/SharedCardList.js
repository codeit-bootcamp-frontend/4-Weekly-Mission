import Card from '../Card';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  column-gap: 2rem;
  row-gap: 2.5rem;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 106rem;
  margin: 0 auto;

  @media (max-width: 1123px) {
    column-gap: 2.4rem;
    padding: 0 3.2rem;
    width: 76.8rem;
  }

  @media (max-width: 767px) {
    row-gap: 2rem;
    width: 38.9rem;
  }
`;

const MainContainerEmpty = styled.div`
  color: #000;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  padding: 4rem;
`;

const CardList = ({ links }) => {
  if (!links) {
    return <MainContainerEmpty>폴더가 비어있습니다.</MainContainerEmpty>;
  }

  return (
    <MainContainer>
      {links.map((link) => (
        <Card link={link} key={link.id} />
      ))}
    </MainContainer>
  );
};

export default CardList;
