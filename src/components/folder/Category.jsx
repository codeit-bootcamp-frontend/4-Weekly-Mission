import styled from 'styled-components';
import Add from 'assets/images/add.png';
import Add2 from 'assets/images/add2.png';

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
                checked={currentCategory === categoryData.name}
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
  width: 1060px;
  margin: 0 auto 3rem;
  @media (max-width: 1199px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    width: 325px;
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
  background-color: ${({ checked }) =>
    checked
      ? `${props => props.theme.primary_color}`
      : `${props => props.theme.white}`};
  color: ${({ checked }) =>
    checked
      ? `${props => props.theme.white}`
      : `${props => props.theme.black}`};
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
