import { useState } from 'react';
import { UserFolderType } from '../../../types/types';
import { cn } from '../../../utils/classNames';
import Modal from '../../Modal/Modal';
import styles from './FolderModal.module.scss';

const FolderModal = ({ onClose, folders }: { onClose: () => void; folders?: UserFolderType[] }) => {
  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);
  return (
    <Modal title='폴더에 추가' onClose={onClose}>
      <p className={styles.description}>링크 주소</p>
      <ul className={styles.folderModalBox}>
        {folders?.slice(1).map((folder, index) => (
          <li
            className={cn(styles.folderModalItem, selectedFolder === index && styles.select)}
            key={folder.id}
            onClick={() => setSelectedFolder(index)}>
            {folder.name}
            <span className={styles.folderModalCount}> {folder.link?.count}개 링크</span>
          </li>
        ))}
      </ul>

      <button className={styles.addButton}>추가하기</button>
    </Modal>
  );
};

export default FolderModal;
