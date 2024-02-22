import { useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return {
    showModal,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
