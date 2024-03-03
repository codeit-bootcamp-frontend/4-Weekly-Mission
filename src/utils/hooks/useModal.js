import { useState } from "react";

const useModal = () => {
  const [modals, setModals] = useState({});

  const openModal = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: true,
    }));
  };

  const closeModal = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: false,
    }));
  };

  return { modals, openModal, closeModal };
};

export default useModal;