import shareIcon from "../images/Icon_share.svg";
import editIcon from "../images/Icon_edit.svg";
import deleteIcon from "../images/Icon_delete.svg";
import DeleteModal from "../modal/DeleteModal";
import EditModal from "../modal/EditModal";
import ShareModal from "../modal/ShareModal";
import styles from "../css/FolderMenu.module.css";
import { useState } from "react";

function FolderMenu({ placeholder }) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openShareModal = () => setIsShareModalOpen(true);
  const closeShareModal = () => setIsShareModalOpen(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <div className={styles.controlBtns}>
      <button className={styles.shareBtn} type="button" onClick={openShareModal}>
        <img src={shareIcon} alt="share-Icon" />
        공유
      </button>
      <ShareModal isOpenModal={isShareModalOpen} closeModal={closeShareModal} />
      <button className={styles.editBtn} type="button" onClick={openEditModal}>
        <img src={editIcon} alt="edit-Icon" />
        이름 변경
      </button>
      <EditModal isOpenModal={isEditModalOpen} closeModal={closeEditModal} placeholder={placeholder}/>
      <button className={styles.deleteBtn} type="button" onClick={openDeleteModal}>
        <img src={deleteIcon} alt="delete-Icon" />
        삭제
      </button>
      <DeleteModal isOpenModal={isDeleteModalOpen} closeModal={closeDeleteModal}/>
    </div>
  )
}

export default FolderMenu;