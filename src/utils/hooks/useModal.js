import { useState } from "react";

function useModal() {
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
}
export default useModal;
