import { useRef, useState } from "react";
import useHandleModalClick from "./useHandleModalClick";

export const useModal = () => {
  const modalRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  useHandleModalClick(modalRef, handleModalClose);

  return {
    openModal,
    modalRef,
    handleModalOpen,
    handleModalClose,
  };
};
