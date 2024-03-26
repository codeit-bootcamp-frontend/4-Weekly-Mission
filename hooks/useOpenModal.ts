import { useState } from 'react'

export const useOpenModal = (init: boolean) => {
  const [isOpenModal, setIsOpenModal] = useState(init);

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  const toggleModal = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  }

  return {isOpenModal, openModal, closeModal, toggleModal}
}