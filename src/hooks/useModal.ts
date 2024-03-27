import { useRef, useState } from "react";
import useHandleOutsideClick from "./useHandleOutsideClick";

export const useModal = () => {
  const modalRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  useHandleOutsideClick(modalRef, handleModalClose);

  return {
    openModal,
    modalRef,
    handleModalOpen,
    handleModalClose,
  };
};
