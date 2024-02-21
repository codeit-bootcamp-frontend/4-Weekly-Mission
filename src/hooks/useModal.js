import { useState } from 'react';

export default function useModal() {
  const [modalState, setModalState] = useState({
    visibility: false,
    target: '',
  });

  const onHandleCancel = (state) => setModalState(state);

  return [modalState, setModalState, onHandleCancel];
}
