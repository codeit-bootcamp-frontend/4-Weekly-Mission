import React, { useState } from 'react';
import {
  StyledButton,
  SortButtonContainer,
  FolderAddButton,
  SelectedFolderName,
  SelectedFolderContainer,
} from './FolderControlsStyle';
import FolderAddIcon from '../../icons/FolderAddIcon';
import FolderActions from '../FolderActions/FolderActions';
import FolderModal from '../FolderModal/FolderModal';

const FolderControls = ({ folders, selectedFolderId, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const selectedFolderName = selectedFolderId
    ? folders.find(folder => folder.id === selectedFolderId)?.name
    : '전체';
  const openModal = type => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
  };

  const handleRenameConfirm = newName => {
    /** 변경되는 폴더이름 (id 필요) */
  };

  const handleAddFolder = folderName => {
    /** 추가되는 폴더 이름 */
  };

  const handleDelete = folderName => {
    /** 삭제되는 폴더이름, (id 필요) */
  };

  const handleShare = folderName => {
    /** 공유되는 폴더이름, (id 필요) */
  };

  const onConfirmActions = {
    folderRename: handleRenameConfirm,
    folderAdd: handleAddFolder,
    folderDelete: handleDelete,
    folderShare: handleShare,
  };

  return (
    <>
      <SortButtonContainer>
        <div>
          <StyledButton
            isActive={selectedFolderId === null}
            onClick={() => onClick(null)}
          >
            전체
          </StyledButton>
          {folders.map(folder => (
            <StyledButton
              key={folder.id}
              isActive={folder.id === selectedFolderId}
              onClick={() => onClick(folder.id)}
            >
              {folder.name}
            </StyledButton>
          ))}
        </div>
        <FolderAddButton onClick={() => openModal('folderAdd')}>
          <FolderAddIcon text="폴더 추가" />
        </FolderAddButton>
      </SortButtonContainer>
      <SelectedFolderContainer>
        <SelectedFolderName>{selectedFolderName}</SelectedFolderName>
        {selectedFolderId && (
          <FolderActions
            onRename={() => openModal('folderRename')}
            onDelete={() => openModal('folderDelete')}
            onShare={() => openModal('folderShare')}
          />
        )}
      </SelectedFolderContainer>
      {isModalOpen && (
        <FolderModal
          modalType={modalType}
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={onConfirmActions[modalType]}
          selectedFolderName={selectedFolderName}
          selectedFolderId={selectedFolderId}
        />
      )}
    </>
  );
};

export default FolderControls;
