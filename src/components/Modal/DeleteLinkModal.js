import classNames from 'classnames';
import PropTypes from 'prop-types';

import ModalButton from 'components/Common/ModalButton';
import styles from 'components/Modal/DeleteLinkModal.module.css';
import ModalContainer from 'components/Modal/ModalContainer';

function DeleteLinkModal({ link, isModalOpen, setIsModalOpen }) {
  // {created_at, description, folder_id, id, image_source, title, updated_at, url}
  const { url } = link;

  const handleButtonClick = (e) => {
    e.stopPropagation();
    console.log('링크 삭제');
  };

  const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
  const linkClasses = classNames(styles.link, 'text-color-gray60', 'text-center');
  const buttonClasses = classNames('background-red', 'width-full');

  return (
    <ModalContainer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <p className={titleClasses}>링크 삭제</p>
      <p className={linkClasses}>{url ?? '링크 주소'}</p>
      <ModalButton className={buttonClasses} text="삭제하기" onClick={handleButtonClick} />
    </ModalContainer>
  );
}

DeleteLinkModal.propTypes = {
  link: PropTypes.shape({ id: PropTypes.number, url: PropTypes.string }),
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
};

DeleteLinkModal.defaultProps = {
  link: { id: null, url: null },
  isModalOpen: false,
  setIsModalOpen: null,
};

export default DeleteLinkModal;
