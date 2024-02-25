import React from 'react';
import FolderRename from './FolderRename';
import { CloseIcon, ModalBackground, ModalContainer } from './folderModalStyle';
import FolderAdd from './FolderAdd';
import FolderDelete from './FolderDelete';
import FolderShare from './FolderShare';

const MODAL_COMPONENTS = {
  folderRename: FolderRename,
  folderAdd: FolderAdd,
  folderDelete: FolderDelete,
  folderShare: FolderShare,
};

const FolderModal = ({ modalType, isOpen, onClose, ...props }) => {
  if (!isOpen) return null;

  const ModalComponent = MODAL_COMPONENTS[modalType];

  if (!ModalComponent) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={onClose} />
        <ModalComponent onClose={onClose} {...props} />
      </ModalContainer>
    </ModalBackground>
  );
};

export default FolderModal;
