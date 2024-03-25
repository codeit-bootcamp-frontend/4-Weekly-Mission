import styled from "styled-components";

interface ModalState {
  linkModal: false;
  folderAddModal: false;
  shareAddModal: false;
  editAddModal: false;
  deleteAddModal: false;
  linkDeleteModal: true;
  dataUrl?: string;
}

// 컴포넌트의 props 타입 정의
interface KebabMenuProps {
  isShowModal: (modalState: (prevState: ModalState) => ModalState) => void;
  dataUrl: string;
}

const KebabMenu: React.FC<KebabMenuProps> = ({ isShowModal, dataUrl }) => {
  const isDeleteModal = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const isFolderAddModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: true,
    }));
  };

  return (
    <KebabMenuContainer>
      <div onClick={isDeleteModal}>삭제하기</div>
      <div onClick={isFolderAddModal}>폴더에 추가</div>
    </KebabMenuContainer>
  );
};

const KebabMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  background-color: white;
  gap: 10px;
  width: 100px;
  padding: 7px 12px;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  div {
    &:hover {
      background-color: #f0f6ff;
      color: #6d6afe;
    }
  }
`;

export default KebabMenu;
