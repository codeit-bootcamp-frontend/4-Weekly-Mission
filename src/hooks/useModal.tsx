import { useState } from 'react';

function useModal() {
  const [modalState, setModalState] = useState({
    visibility: false,
    target: '',
  });

  const onHandleCancel = (state) => setModalState(state);

  return [modalState, setModalState, onHandleCancel];
}

export default useModal;
