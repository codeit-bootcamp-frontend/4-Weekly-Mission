import { useState } from 'react';
import styles from '../css/LinkAdd.module.css'
import AddLinkModal from '../modal/AddLinkModal';

function LinkAdd() {
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);

  const openAddLinkModal = () => setIsAddLinkModalOpen(true);
  const closeAddLinkModal = () => setIsAddLinkModalOpen(false);

  return (
    <div className={styles.header}>
      <div className={styles.linkAdd}>
        <div className={styles.linkIcon}></div>
        <input type="text" name="linkAdd" placeholder="링크를 추가하세요" />
        <button className={styles.addButton} type="button" onClick={openAddLinkModal}>추가하기</button>
        <AddLinkModal isOpenModal={isAddLinkModalOpen} closeModal={closeAddLinkModal} />
      </div>
    </div>
  )
}

export default LinkAdd;