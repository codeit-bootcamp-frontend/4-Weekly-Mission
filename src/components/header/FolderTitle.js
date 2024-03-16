import React from 'react';
import styled from 'styled-components';

const FolderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
`;

const Folder = styled.div`
  margin: 2rem auto 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    margin: 1rem auto 4rem;
  }
`;

const FolderUserImage = styled.img`
  margin-bottom: 1.2rem;
  width: 6rem;
  height: 6rem;

  @media (max-width: 767px) {
    margin-bottom: 0.6rem;
    width: 4rem;
    height: 4rem;
  }
`;

const FolderUserName = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

const FolderName = styled.p`
  font-size: 4rem;
  font-weight: 600;

  @media (max-width: 767px) {
    font-size: 3.2rem;
  }
`;

const FolderTitle = ({ folder }) => {
  return (
    <FolderSection>
      <Folder>
        <FolderUserImage
          src={folder.profileImageSource}
          alt="userImage"
          className="folder-user-image"
        />
        <FolderUserName>@{folder.ownerName}</FolderUserName>
        <FolderName>{folder.folderName}</FolderName>
      </Folder>
    </FolderSection>
  );
};

export default FolderTitle;
