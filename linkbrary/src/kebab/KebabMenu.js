import styled from "styled-components";

const KebabMenu = ({ isShowModal, dataUrl }) => {
  const isDeleteModal = (e) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: true,
      dataUrl: dataUrl,
    }));
    console.log();
  };

  const isFolderAddModal = (e) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: true,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: false,
    }));
  };

  return (
    <MenuContainer>
      <div onClick={isDeleteModal}>삭제하기</div>
      <div onClick={isFolderAddModal}>폴더에 추가</div>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2.5rem;
  left: 280px;
  width: 100px;
  background-color: white;
  gap: 10px;
  width: 7rem;
  padding: 5px 0px;
  box-shadow: 0 0.2rem 0.8rem 0 rgba(51, 50, 54, 0.1);

  &:hover {
    background-color: #f0f6ff;
  }
`;

export default KebabMenu;
