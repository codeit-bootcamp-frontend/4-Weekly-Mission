import React, { useContext } from 'react';

import { ModalDispatchContext } from 'context/ModalContext';

function useModal() {
  const { open, close } = useContext(ModalDispatchContext);

  type Link = {
    id?: number;
    created_at?: string;
    updated_at?: string | null;
    url?: string;
    title?: string | null;
    description?: string | null;
    folder_id?: number | null;
  };

  type PropList = {
    onSubmit: () => Promise<void> | void;
    link?: Link;
    folder?: { id: number; name: string };
  };

  const openModal = (modalComponent: React.ElementType, propList: PropList) => {
    open(modalComponent, propList);
  };

  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
}

export default useModal;
