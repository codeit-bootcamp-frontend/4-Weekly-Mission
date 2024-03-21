import { useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [modalButtonName, setModalButtonName] = useState("");

  const openModal = (open = true, title = "", buttonName = "", type = null) => {
    setIsModalOpen(open);
    setModalType(type);
    setModalTitle(title);
    setModalButtonName(buttonName);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTitle("");
    setModalButtonName("");
  };

  const changeModalType = (type) => {
    setModalType(type);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    modalType,
    changeModalType,
    modalTitle,
    setModalTitle,
    modalButtonName,
    setModalButtonName,
  };
};

export default useModal;
