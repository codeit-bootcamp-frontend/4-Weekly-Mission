import { useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string | undefined>("");
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalButtonName, setModalButtonName] = useState<string | undefined>(
    ""
  );

  const openModal = (
    open: boolean,
    title: string,
    buttonName: string | undefined,
    type: string | undefined
  ) => {
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

  const changeModalType = (type: string | undefined) => {
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
