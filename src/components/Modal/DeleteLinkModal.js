import classNames from 'classnames';
import PropTypes from 'prop-types';

import ModalButton from 'components/Common/ModalButton';
import styles from 'components/Modal/DeleteLinkModal.module.css';
import ModalContainer from 'components/Modal/ModalContainer';

function DeleteLinkModal({ folder }) {
  const { url } = folder;

  const handleButtonClick = () => {
    console.log('폴더 삭제');
  };

  const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
  const folderTitleClasses = classNames(styles['folder-title'], 'text-color-gray60', 'text-center');
  const buttonClasses = classNames('background-red', 'width-full');

  return (
    <ModalContainer>
      <p className={titleClasses}>링크 삭제</p>
      <p className={folderTitleClasses}>{url ?? '링크주소'}</p>
      <ModalButton className={buttonClasses} text="삭제하기" onClick={handleButtonClick} />
    </ModalContainer>
  );
}

DeleteLinkModal.propTypes = {
  folder: PropTypes.shape({ id: PropTypes.number, url: PropTypes.string }),
};

DeleteLinkModal.defaultProps = {
  folder: { id: null, url: null },
};

export default DeleteLinkModal;
