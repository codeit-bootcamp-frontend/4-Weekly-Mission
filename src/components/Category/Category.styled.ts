import styled from 'styled-components';

interface CategoryProps {
  $isSelect: boolean;
}

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CategoryBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const CategoryList = styled.li<CategoryProps>`
  padding: 0.6rem 0.75rem 0.5rem;
  border-radius: 0.3125rem;
  border: 1px solid var(--Linkbrary-primary-color);
  cursor: pointer;

  &:hover {
    background-color: var(--Linkbrary-primary-color);
    color: #ffffff;
  }

  background-color: ${({ $isSelect }) => ($isSelect ? '#6d6afe' : '#ffffff')};
  color: ${({ $isSelect }) => ($isSelect ? '#ffffff' : '#000000')};
`;

export const CategoryAddButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 2rem;
  width: 5rem;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const CategoryAddText = styled.span`
  color: var(--Linkbrary-primary-color);
  letter-spacing: -0.01875rem;
  font-weight: 500;
  line-height: 2rem;
  width: 5rem;
`;

export const CategoryAddImg = styled.img`
  width: 1rem;
  height: 1rem;
`;
export const CategoryTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 0.75rem;
    margin: 1.75rem 0 1.25rem;
  }
`;

export const CategoryTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.0125rem;
`;

export const CategoryControlList = styled.ul`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const CategoryControlImg = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

export const CategoryControlText = styled.span`
  color: var(--Linkbrary-gray60);
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 0.25rem;
`;
