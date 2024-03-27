import { useState } from "react";

export type Modal = {
  [key: string]: boolean;
};
export type OpenModal = (modalName: string) => void;
export type CloseModal = (modalName: string) => void;

export type UseModal = {
  modals: Modal;
  openModal: OpenModal;
  closeModal: CloseModal;
}

const useModal = () => {
  const [modals, setModals] = useState<Modal>({});

  const openModal = (modalName: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: true,
    }));
  };

  const closeModal: CloseModal = (modalName: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: false,
    }));
  };

  return { modals, openModal, closeModal };
};

export default useModal;
