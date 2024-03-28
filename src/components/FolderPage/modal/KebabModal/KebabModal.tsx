/* eslint-disable */
import { Dispatch, SetStateAction } from 'react';
import styles from './KebabModal.module.css';

interface KekbabModalProps {
  handleClickKebabModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleDeleteLinkModalClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  url: string;
  setSharedUrl: Dispatch<SetStateAction<string>>;
}

export default function KebabModal({
  handleClickKebabModal,
  handleDeleteLinkModalClick,
  handleAddLinkInFolderModalClick,
  url,
  setSharedUrl,
}: KekbabModalProps) {
  interface handleKebabType {
    (e: React.MouseEvent<HTMLButtonElement>): void;
  }

  interface handleKebabFolderType {
    (e: React.MouseEvent<HTMLButtonElement>): void;
  }

  const handleKebabDeleteClick: handleKebabType = function (e) {
    handleClickKebabModal(e);
    handleDeleteLinkModalClick(e);
  };

  const handleKebabAddLinkInFolderClick: handleKebabFolderType = function (e) {
    handleClickKebabModal(e);
    handleAddLinkInFolderModalClick(e);
    setSharedUrl(url);
  };

  return (
    <div className={styles['kebab-modal-wrapper']}>
      <button
        className={styles['kekbab-modal-delete-button']}
        onClick={handleKebabDeleteClick}
      >
        삭제하기
      </button>
      <button
        className={styles['kekbab-modal-add-folder-button']}
        onClick={handleKebabAddLinkInFolderClick}
      >
        폴더에 추가
      </button>
    </div>
  );
}
