import styled from "styled-components";
import closeImgSrc from "../assets/close.svg";
import { useState } from "react";
import AddFolderModal from "./AddFolderModal";
import AddLinkModal from "./AddLinkModal";
import DeleteFolderModal from "./DeleteFolderModal";
import DeleteLinkModal from "./DeleteLinkModal";
import EditModal from "./EditModal";
import ShareModal from "./ShareModal";

const Modal = ({
  folderData,
  folderMenus,
  title,
  isShowModal,
  linkAddModal,
  folderAddModal,
  shareModal,
  editModal,
  deleteModal,
  linkDeleteModal,
  dataUrl,
  menusId,
}) => {
  const handleClickExit = (e) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: false,
    }));
  };
  return (
    <div className="modal">
      <div
        className={linkAddModal ? "modal-container" : "small-modal-container"}
      >
        <h2 className="modal-title">{title}</h2>
        <a className="modal-button-close" href="/" onClick={handleClickExit}>
          <img src={closeImgSrc} alt="닫기" />
        </a>
        {linkDeleteModal ? <DeleteLinkModal link={dataUrl} /> : null}
        {deleteModal ? <DeleteFolderModal title="폴더 삭제" /> : null}
        {editModal ? <EditModal /> : null}
        {shareModal ? <ShareModal menusId={menusId} /> : null}
        {folderAddModal ? <AddFolderModal /> : null}
        {linkAddModal ? (
          <AddLinkModal folderData={folderData} folderMenus={folderMenus} />
        ) : null}
      </div>
    </div>
  );
};
export default Modal;
