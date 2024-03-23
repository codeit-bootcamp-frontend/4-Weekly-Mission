import { useContext } from 'react';

import { ModalDispatchContext } from 'context/ModalContext';

function useModal() {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = (modalComponent, props) => {
    open(modalComponent, props);
  };

  const closeModal = (modalComponent) => {
    close(modalComponent);
  };

  return { openModal, closeModal };
}

export default useModal;
