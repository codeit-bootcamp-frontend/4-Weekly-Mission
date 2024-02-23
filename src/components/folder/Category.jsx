import styled from 'styled-components';
import Add from 'assets/images/add.png';
import Add2 from 'assets/images/add2.png';
import { useState } from 'react';
import Modal from 'components/common/modal/Modal';
import PostModal from 'components/common/modal/PostModal';

/**
 * Category 컴포넌트
 * @param {Object} props
 * @param {Array} props.categoryDatas 카테고리 데이터 배열
 * @param {string} props.currentCategory 현재 선택된 카테고리
 * @param {function} props.handleCategoryButton 카테고리 버튼 핸들러 함수
 * @returns {JSX.Element}
 */
const Category = ({ categoryDatas, currentCategory, handleCategoryButton }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
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
        <AddButton onClick={handleClick}>
          <Text>폴더 추가</Text>
          <Image></Image>
        </AddButton>
        {showModal && (
          <Modal setShowModal={setShowModal} showModal={showModal}>
            <PostModal isAdd={true}>폴더 추가</PostModal>
          </Modal>
        )}
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
    gap: 1.2rem;
  }
`;
const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  gap: 0.8rem;
`;
const CategoryButton = styled.button`
  background: transparent;
  border-radius: 0.5rem;
  height: 3.9rem;
  border: 0.1rem solid #6d6afe;
  background-color: ${({ checked, theme }) =>
    checked ? theme.primary : theme.white};
  color: ${({ checked, theme }) => (checked ? theme.white : theme.black)};
  padding: 0.8rem 1.2rem;
  font-size: 1.6rem;
  font-weight: 400;
`;
const AddButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 9.5rem;
  height: 3.9rem;
  gap: 0.4rem;
  cursor: pointer;
  z-index: 2;
  @media (max-width: 767px) {
    position: fixed;
    width: 13rem;
    bottom: 10.1rem;
    left: calc(50vw - 6.3rem);
    background-color: ${props => props.theme.primary};
    border-radius: 2rem;
    padding: 0.8rem 2.4rem;
  }
`;
const Text = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.03rem;
  white-space: nowrap;
  color: ${props => props.theme.primary};
  @media (max-width: 767px) {
    color: ${props => props.theme.white};
  }
`;
const Image = styled.div`
  width: 1.9rem;
  height: 1.9rem;
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
