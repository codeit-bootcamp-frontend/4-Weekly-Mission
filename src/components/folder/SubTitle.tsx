import React from 'react';
import OptionButton from './OptionButton';
import styled from 'styled-components';

/**
 *
 * @param {Object} props
 * @param {string} props.currentCategory 현재 선택된 카테고리의 이름
 * @param {number} props.categoryId 현재 선택된 카테고리의 id
 * @returns
 */
interface SubTitleProps {
  currentCategory: string;
  categoryId: number;
}
const SubTitle: React.FC<SubTitleProps> = ({ currentCategory, categoryId }) => {
  return (
    <TitleContainer>
      <CategoryName>{Object.values(currentCategory)}</CategoryName>
      {currentCategory !== '전체' && (
        <OptionButton
          placeholder={currentCategory}
          folderName={currentCategory}
          categoryId={categoryId}
        />
      )}
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
    gap: 1.2rem;
  }
`;
const CategoryName = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 2.88rem;
  letter-spacing: -0.03rem;
  text-align: left;
`;
export default SubTitle;
