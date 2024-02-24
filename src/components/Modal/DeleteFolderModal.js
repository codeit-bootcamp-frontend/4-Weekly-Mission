import classNames from 'classnames';
import PropTypes from 'prop-types';

import ModalButton from 'components/Common/ModalButton';
import styles from 'components/Modal/DeleteFolderModal.module.css';
import ModalContainer from 'components/Modal/ModalContainer';

function DeleteFolderModal({ folder }) {
  const { title } = folder;

  const handleButtonClick = () => {
    console.log('폴더 삭제');
  };

  const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
  const folderTitleClasses = classNames(styles['folder-title'], 'text-color-gray60', 'text-center');
  const buttonClasses = classNames('background-red', 'width-full');

  return (
    <ModalContainer>
      <p className={titleClasses}>폴더 삭제</p>
      <p className={folderTitleClasses}>{title ?? '폴더명'}</p>
      <ModalButton className={buttonClasses} text="삭제하기" onClick={handleButtonClick} />
    </ModalContainer>
  );
}

DeleteFolderModal.propTypes = {
  folder: PropTypes.shape({ id: PropTypes.number, title: PropTypes.string }),
};

DeleteFolderModal.defaultProps = {
  folder: { id: null, title: null },
};

export default DeleteFolderModal;
