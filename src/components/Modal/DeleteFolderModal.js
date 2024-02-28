import classNames from 'classnames';
import PropTypes from 'prop-types';

import ModalButton from 'components/Common/ModalButton';
import styles from 'components/Modal/DeleteFolderModal.module.css';
import ModalContainer from 'components/Modal/ModalContainer';

function DeleteFolderModal({ folder, onSubmit, onClose }) {
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

DeleteFolderModal.propTypes = {
  folder: PropTypes.shape({ name: PropTypes.string }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

DeleteFolderModal.defaultProps = {
  folder: { name: '폴더명' },
};

export default DeleteFolderModal;
