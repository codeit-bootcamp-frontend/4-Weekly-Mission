import React from 'react';
import OptionButton from './OptionButton';
import styled from 'styled-components';

/**
 *
 * @param {string} currentCategory 현재 선택된 카테고리의 이름
 * @returns
 */
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
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 1199px) {
    width: calc(100% - 6.4rem);
  }
  @media (max-width: 767px) {
    width: calc(100% - 6.4rem);
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
