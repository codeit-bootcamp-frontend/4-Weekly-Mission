import { useState } from 'react';

interface useOpenModalReturn {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useOpenModal = (init: boolean): useOpenModalReturn => {
  const [isOpenModal, setIsOpenModal] = useState(init);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return { isOpenModal, openModal, closeModal };
};
