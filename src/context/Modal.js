/* eslint-disable react/jsx-props-no-spreading */
import loadable from '@loadable/component';
import { useContext } from 'react';

import { ModalDispatchContext, ModalStateContext } from 'context/ModalContext';

// 전체 모달 리스트
const modalList = {
  AddForderModal: loadable(() => import('components/Modal/AddFolderModal')),
  AddToForderModal: loadable(() => import('components/Modal/AddToFolderModal')),
  DeleteFolderModal: loadable(() => import('components/Modal/DeleteFolderModal')),
  DeleteLinkModal: loadable(() => import('components/Modal/DeleteLinkModal')),
  EditFolderNameModal: loadable(() => import('components/Modal/EditFolderNameModal')),
  ShareModal: loadable(() => import('components/Modal/ShareModal')),
};

// 다른 곳에서 불러올 모달 컴포넌트
function Modal() {
  const openedModal = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);

  if (!openedModal) {
    return null;
  }

  const { ModalComponent, propList } = openedModal;
  const { onSubmit, ...restPropList } = propList;

  const onClose = () => {
    close(ModalComponent);
  };

  // onSubmit -> 동기/비동기 여부를 모르기 때문에 비동기로 처리
  const handleSubmit = async () => {
    await onSubmit();
    onClose();
  };

  return <ModalComponent {...restPropList} onSubmit={handleSubmit} onClose={onClose} />;
}

export { modalList, Modal };
