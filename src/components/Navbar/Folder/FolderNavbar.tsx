import { useState } from 'react';
import { CiShare1 } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { TiPencil } from 'react-icons/ti';
import Modal from '../../Modal/Modal';
import styles from './FolderNavbar.module.scss';

const FolderNavbar = ({ folderName }: { folderName: string }) => {
  const [selectedModal, setSelectedModal] = useState<number | null>(null);

  const closeModal = () => {
    setSelectedModal(null);
  };

  const FOLDER_NAVBAR_LIST = [
    {
      name: '공유',
      icon: <CiShare1 />,
      modal: (
        <Modal title='폴더 공유' onClose={closeModal}>
          <p className={styles.modalSubTitle}>폴더명</p>
        </Modal>
      )
    },
    {
      name: '이름 변경',
      icon: <TiPencil />,
      modal: (
        <Modal title='폴더 이름 변경' onClose={closeModal}>
          <input className={styles.modalInput} placeholder={folderName} />
          <button className={styles.changeButton}>변경하기</button>
        </Modal>
      )
    },
    {
      name: '삭제',
      icon: <RiDeleteBinLine />,
      modal: (
        <Modal title='폴더 삭제' onClose={closeModal}>
          <p className={styles.modalSubTitle}>{folderName}</p>
          <button className={styles.removeButton}>삭제하기</button>
        </Modal>
      )
    }
  ];

  return (
    <ul className={styles.layout}>
      {FOLDER_NAVBAR_LIST.map((item, index: number) => (
        <li className={styles.item} key={index} onClick={() => setSelectedModal(index)}>
          {item.icon}
          <span>{item.name}</span>
          {selectedModal === index && item.modal}
        </li>
      ))}
    </ul>
  );
};

export default FolderNavbar;
