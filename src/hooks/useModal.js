import { useState } from 'react';
export default function useModal(initialValue) {
  const [isShowModal, setIsShowModal] = useState(initialValue);

  function handleModalClick() {
    setIsShowModal(!isShowModal);
  }

  return { isShowModal, handleModalClick };
}
