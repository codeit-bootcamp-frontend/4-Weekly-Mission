import { useState } from 'react';

interface ModalProps {
  showModal: boolean;
  handleOpenModal: (e: React.MouseEvent) => void;
  handleCloseModal: () => void;
}

const useModal = (): ModalProps => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
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
