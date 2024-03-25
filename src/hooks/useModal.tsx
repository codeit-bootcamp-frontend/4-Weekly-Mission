import { useState } from 'react';

interface ModalState {
  visibility: boolean;
  target: string;
}

type ModalStateUpdater = (state: ModalState) => void;

function useModal():[ModalState, ModalStateUpdater, () => void] {
  const [modalState, setModalState] = useState<ModalState>({
    visibility: false,
    target: '',
  });

  const onHandleCancel: () => void = () => setModalState({ visibility: false, target: '' });
  
  return [modalState, setModalState, onHandleCancel];
}

export default useModal;
