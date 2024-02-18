import React from 'react';
import OptionButton from './OptionButton';
import styled from 'styled-components';

const SubTitle = ({ currentCategory }) => {
  return (
    <TitleContainer>
      <CategoryName>{Object.values(currentCategory)}</CategoryName>
      {currentCategory !== '전체' && <OptionButton />}
    </TitleContainer>
  );
};
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin-bottom: 2rem;
  @media (max-width: 1199px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    width: 325px;
    flex-direction: column;
    gap: 12px;
  }
`;
const CategoryName = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 28.8px;
  letter-spacing: -0.3px;
  text-align: left;
`;
export default SubTitle;
