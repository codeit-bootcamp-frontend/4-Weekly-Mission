import { RefObject } from "react";
import { Modal } from "../Modal";
import "./ShareFolderModal.css";

interface Props {
  folderName: string;
  openModal: boolean;
  handleModalClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

export const ShareFolderModal = ({
  folderName,
  openModal,
  handleModalClose,
  modalRef,
}: Props) => {
  return (
    <Modal
      openModal={openModal}
      handleModalClose={handleModalClose}
      modalRef={modalRef}
    >
      <div className="shareFolderModal">
        <div className="shareFolderModal-top">폴더 공유</div>
        <div className="shareFolderModal-middle">{folderName}</div>
        <div className="shareFolderModal-bottom">
          <div className="shareFolderModal-bottom-kakao">
            <div className="kakao-circle">
              <div className="kakao-icon"></div>
            </div>
            <span>카카오톡</span>
          </div>
          <div className="shareFolderModal-bottom-facebook">
            <div className="facebook-circle">
              <div className="facebook-icon"></div>
            </div>
            <span>페이스북</span>
          </div>
          <div className="shareFolderModal-bottom-link">
            <div className="link-circle">
              <div className="link-icon"></div>
            </div>
            <span>링크 복사</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
