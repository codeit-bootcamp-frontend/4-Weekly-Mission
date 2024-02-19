import React from 'react';
import {
  StyledButton,
  SortButtonContainer,
  FolderAddButton,
  SelectedFolderName,
  SelectedFolderContainer,
} from './FolderControlsStyle';
import FolderAddIcon from '../../icons/FolderAddIcon';
import FolderActions from '../FolderActions/FolderActions';

const FolderControls = ({ folders, selectedFolderId, onClick }) => {
  const selectedFolderName = selectedFolderId
    ? folders.find(folder => folder.id === selectedFolderId)?.name
    : '전체';

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
        <FolderAddButton>
          <FolderAddIcon text="폴더 추가" />
        </FolderAddButton>
      </SortButtonContainer>
      <SelectedFolderContainer>
        <SelectedFolderName>{selectedFolderName}</SelectedFolderName>
        {selectedFolderId && <FolderActions />}
      </SelectedFolderContainer>
    </>
  );
};

export default FolderControls;
