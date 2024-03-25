import React, { useContext } from 'react';

import { ModalDispatchContext } from 'context/ModalContext';

function useModal() {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = (modalComponent: React.ElementType, propList: { onSubmit: () => Promise<void> | void }) => {
    open(modalComponent, propList);
  };

  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
}

export default useModal;
