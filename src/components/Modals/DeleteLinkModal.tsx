import ModalBase from './ModalBase';
import { useState } from 'react';
import type { ModalBaseProps } from './ModalBase';

function DeleteLinkModal({ onClose }: ModalBaseProps) {
  const [deleteLink, setDeleteLink] = useState(false);

  function handleChange() {
    setDeleteLink(true);
  }

  return (
    <div onClick={onClose}>
      <ModalBase
        modalName="링크 삭제"
        children="삭제하기"
        onClick={handleChange}
        centerSpace={<span>http://www.abc.com</span>}
        onClose={onClose}
      />
    </div>
  );
}

export default DeleteLinkModal;
