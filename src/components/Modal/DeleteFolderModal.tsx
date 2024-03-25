import classNames from 'classnames';

import ModalButton from 'components/Common/ModalButton';
import styles from 'components/Modal/DeleteFolderModal.module.css';
import ModalContainer from 'components/Modal/ModalContainer';

interface DeleteFolderModalProps {
  folder: { name: string };
  onSubmit: () => void;
  onClose: () => void;
}

function DeleteFolderModal({ folder, onSubmit, onClose }: DeleteFolderModalProps) {
  // {id, created_at, name, user_id, favorite, link: {count}}
  const { name } = folder;

  const handleButtonClick = () => {
    console.log('폴더 삭제');
    onSubmit();
  };

  const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
  const folderTitleClasses = classNames(styles['folder-title'], 'text-color-gray60', 'text-center');
  const buttonClasses = classNames('background-red', 'width-full');

  return (
    <ModalContainer onClose={onClose}>
      <p className={titleClasses}>폴더 삭제</p>
      <p className={folderTitleClasses}>{name}</p>
      <ModalButton className={buttonClasses} text="삭제하기" onClick={handleButtonClick} />
    </ModalContainer>
  );
}

export default DeleteFolderModal;
