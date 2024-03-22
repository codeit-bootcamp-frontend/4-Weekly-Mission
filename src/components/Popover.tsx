import { useState } from "react";
import styles from "../css/Popover.module.css";
import AddLinkModal from "../modal/AddLinkModal";
import DeleteLinkModal from "../modal/DeleteLinkModal";

function Popover({ isOpen, url }) {
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openAddLinkModal = () => setIsAddLinkModalOpen(true);
  const closeAddLinkModal = () => setIsAddLinkModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const noBubble = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }
  
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div className={styles.popoverMenu} onClick={noBubble}>
        <button className={styles.selectButton} type="button" onClick={openDeleteModal}>삭제하기</button>
        <DeleteLinkModal isOpenModal={isDeleteModalOpen} closeModal={closeDeleteModal} url={url}/>
        <button className={styles.selectButton} type="button" onClick={openAddLinkModal}>폴더에 추가</button>
        <AddLinkModal isOpenModal={isAddLinkModalOpen} closeModal={closeAddLinkModal} />
      </div>
    </div>
  )
}

export default Popover;