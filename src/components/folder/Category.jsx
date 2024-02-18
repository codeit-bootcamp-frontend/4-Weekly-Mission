import styled from 'styled-components';
import Add from 'assets/images/add.png';
import Add2 from 'assets/images/add2.png';

/**
 * Category 컴포넌트
 * @param {Object} props
 * @param {Array} props.categoryDatas 카테고리 데이터 배열
 * @param {string} props.currentCategory 현재 선택된 카테고리
 * @param {function} props.handleCategoryButton 카테고리 버튼 핸들러 함수
 * @returns {JSX.Element}
 */
const Category = ({ categoryDatas, currentCategory, handleCategoryButton }) => {
  return (
    <>
      <Wrapper>
        <CategoryContainer>
          {categoryDatas &&
            categoryDatas.map(categoryData => (
              <CategoryButton
                id={categoryData.id}
                key={categoryData.id}
                name={categoryData.name}
                checked={currentCategory === categoryData.name ? true : null}
                onClick={handleCategoryButton}
              >
                {categoryData.name}
              </CategoryButton>
            ))}
        </CategoryContainer>
        <AddButtonContainer>
          <Text>폴더 추가</Text>
          <Image></Image>
        </AddButtonContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3rem;
  @media (max-width: 1199px) {
    width: calc(100% - 6.4rem);
  }
  @media (max-width: 767px) {
    width: calc(100% - 6.4rem);
    flex-direction: column;
    gap: 12px;
  }
`;
const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  gap: 8px;
`;
const CategoryButton = styled.button`
  background: transparent;
  border-radius: 5px;
  height: 39px;
  border: 1px solid #6d6afe;
  background-color: ${({ checked, theme }) =>
    checked ? theme.primary_color : theme.white};
  color: ${({ checked, theme }) => (checked ? theme.white : theme.black)};
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 400;
`;
const AddButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95px;
  height: 39px;
  gap: 4px;
  cursor: pointer;
  z-index: 2;
  @media (max-width: 767px) {
    position: fixed;
    width: 130px;
    bottom: 101px;
    left: calc(50vw - 63px);
    background-color: ${props => props.theme.primary_color};
    border-radius: 20px;
    padding: 8px 24px;
  }
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.3px;
  white-space: nowrap;
  color: ${props => props.theme.primary_color};
  @media (max-width: 767px) {
    color: ${props => props.theme.white};
  }
`;
const Image = styled.div`
  width: 19px;
  height: 19px;
  background-image: url(${Add});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 767px) {
    background: url(${Add2});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default Category;
