import classNames from 'classnames';

import ModalButton from 'components/Common/ModalButton';
import styles from 'components/Modal/DeleteLinkModal.module.css';
import ModalContainer from 'components/Modal/ModalContainer';

interface DeleteLinkModalProps {
  link: { url: string };
  onSubmit: () => void;
  onClose: () => void;
}

function DeleteLinkModal({ link, onSubmit, onClose }: DeleteLinkModalProps) {
  // {created_at, description, folder_id, id, image_source, title, updated_at, url}
  const { url } = link;

  const handleButtonClick = () => {
    console.log('링크 삭제');
    onSubmit();
  };

  const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
  const linkClasses = classNames(styles.link, 'text-color-gray60', 'text-center');
  const buttonClasses = classNames('background-red', 'width-full');

  return (
    <ModalContainer onClose={onClose}>
      <p className={titleClasses}>링크 삭제</p>
      <p className={linkClasses}>{url ?? '링크 주소'}</p>
      <ModalButton className={buttonClasses} text="삭제하기" onClick={handleButtonClick} />
    </ModalContainer>
  );
}

export default DeleteLinkModal;
