import { ModalButtonBlue } from "feature/ModalElements/ModalButtonBlue";
import "./AddToFolder.css";
import { Modal } from "feature/Modal/Modal";

export function AddToFolder({ isOpenModal, handleModalClose }) {
  return (
    <Modal
      title="폴더에 추가"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <div className="AddToFolderModal-titleContainer">
        <p className="AddToFolderModal-subTitle">링크 주소</p>
      </div>
      <div className="AddToFolderModal-folderList">
        <div className="AddToFolderModal-selectFolder">
          <p className="AddToFolderModal-folderName"> 코딩팁</p>
          <span className="AddToFolderModal-folderCount">7개 링크</span>
          <div className="AddToFolderModal-selectFolderIcon" />
        </div>
        <div className="AddToFolderModal-selectFolder">
          <p className="AddToFolderModal-folderName"> 채용 사이트</p>
          <span className="AddToFolderModal-folderCount">12개 링크</span>
          <div className="AddToFolderModal-selectFolderIcon" />
        </div>
        <div className="AddToFolderModal-selectFolder">
          <p className="AddToFolderModal-folderName"> 유용한 글</p>
          <span className="AddToFolderModal-folderCount">30개 링크</span>
          <div className="AddToFolderModal-selectFolderIcon" />
        </div>
        <div className="AddToFolderModal-selectFolder">
          <p className="AddToFolderModal-folderName"> 나만의 장소</p>
          <span className="AddToFolderModal-folderCount">3개 링크</span>
          <div className="AddToFolderModal-selectFolderIcon" />
        </div>
      </div>
      <ModalButtonBlue type="button">삭제하기</ModalButtonBlue>
    </Modal>
  );
}
