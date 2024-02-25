import { useState } from "react";
import { Modal } from "../Modal";
import "./AddLinkModal.css";

export const AddLinkModal = ({
  linkUrl,
  folderList,
  openModal,
  handleModalClose,
  modalRef,
  handlePreventLinkClick,
}) => {
  const [selectId, setSelectId] = useState(null);

  const handleFolderListClick = (id) => {
    setSelectId(id);
  };

  return (
    <div onClick={handlePreventLinkClick}>
      <Modal
        openModal={openModal}
        handleModalClose={handleModalClose}
        modalRef={modalRef}
      >
        <div className="addLinkModal">
          <div className="addLinkModal-top">폴더에 추가</div>
          <div className="addLinkModal-url">{linkUrl}</div>
          <div className="addLinkModal-folderList">
            {folderList?.map((folder) => (
              <div
                className={`addLinkModal-folderList-content ${
                  selectId === folder.id ? "selectFolder" : ""
                }`}
                key={folder.id}
                id={folder.id}
                onClick={() => handleFolderListClick(folder.id)}
              >
                <div>
                  <span className="addLinkModal-folderList-folderName">
                    {folder.name}
                  </span>
                  <span className="addLinkModal-folderList-count">
                    {folder.link.count}개 링크
                  </span>
                </div>

                <div
                  className={`addLinkModal-folderList-checkButton  ${
                    selectId === folder.id ? "selectFolderButton" : ""
                  }`}
                ></div>
              </div>
            ))}
          </div>

          <button className="addLinkModal-button">추가하기</button>
        </div>
      </Modal>
    </div>
  );
};
