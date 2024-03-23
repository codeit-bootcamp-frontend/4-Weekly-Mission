import ModalBase from './ModalBase';
import { useState } from 'react';

function DeleteLinkModal({ setEditModalOpen }) {
  const [deleteLink, setDeleteLink] = useState(false);

  function closeModal() {
    setEditModalOpen(false);
  }

  function handleChange() {
    setDeleteLink(true);
  }

  return (
    <div onClick={closeModal}>
      <ModalBase
        modalName="링크 삭제"
        children="삭제하기"
        onClick={handleChange}
        centerSpace={<span>http://www.abc.com</span>}
      />
    </div>
  );
}

export default DeleteLinkModal;
