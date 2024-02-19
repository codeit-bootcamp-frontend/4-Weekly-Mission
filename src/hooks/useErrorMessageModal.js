import { useState } from 'react';

const useErrorMessageModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showErrorModal = message => {
    setErrorMessage(message);
    setIsModalOpen(true);
  };

  const hideErrorModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    errorMessage,
    showErrorModal,
    hideErrorModal,
  };
};

export default useErrorMessageModal;
