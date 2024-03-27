import { MouseEvent, useState } from "react";
import styles from "../css/Popover.module.css";
import AddLinkModal from "../modal/AddLinkModal";
import DeleteLinkModal from "../modal/DeleteLinkModal";

interface Props {
  isOpen: boolean,
  url: string,
}

function Popover({ isOpen, url }: Props) {
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openAddLinkModal = () => setIsAddLinkModalOpen(true);
  const closeAddLinkModal = (): void => setIsAddLinkModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = (): void => setIsDeleteModalOpen(false);

  const noBubble = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }
  
  return (
    <div style={{ display: isOpen ? "block" : "none" }} className={styles.popoverMenu} onClick={noBubble}>
      <div className={styles.popoverBtns}>
        <button className={styles.selectButton} type="button" onClick={openDeleteModal}>삭제하기</button>
        <DeleteLinkModal isOpenModal={isDeleteModalOpen} closeModal={closeDeleteModal} url={url}/>
        <button className={styles.selectButton} type="button" onClick={openAddLinkModal}>폴더에 추가</button>
        <AddLinkModal isOpenModal={isAddLinkModalOpen} closeModal={closeAddLinkModal} />
      </div>
    </div>
  )
}

export default Popover;