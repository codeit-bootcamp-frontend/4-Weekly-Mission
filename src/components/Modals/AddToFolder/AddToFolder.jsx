import { ModalButtonBlue } from "components/Modals/ModalElements/ModalButtonBlue";
import "./AddToFolder.css";
import { Modal } from "components/Modals/Modal/Modal";
import styled from "styled-components";

export function AddToFolder({
  isOpenModal,
  handleModalClose,
  linkURL,
  folderList,
}) {
  return (
    <Modal
      title="폴더에 추가"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <SelectLink>{linkURL}</SelectLink>
      <div className="AddToFolderModal-selectFolder">
        <p className="AddToFolderModal-folderName"> 코딩팁</p>
        <span className="AddToFolderModal-folderCount">7개 링크</span>
        <div className="AddToFolderModal-selectFolderIcon" />
      </div>
      <ModalButtonBlue type="button">삭제하기</ModalButtonBlue>
    </Modal>
  );
}

export const SelectLink = styled.p`
  color: var(--gray60);
  font-size: 1.4rem;
  line-height: 2.2rem;
  text-align: center;
`;
