import { useState } from "react";

export const useModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return {
    openModal,
    handleModalOpen,
    handleModalClose,
  };
};
