import { useState, useCallback } from 'react';

const useErrorMessageModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showErrorModal = useCallback(message => {
    setErrorMessage(message);
    setIsModalOpen(true);
  }, []);

  const hideErrorModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    isModalOpen,
    errorMessage,
    showErrorModal,
    hideErrorModal,
  };
};

export default useErrorMessageModal;
