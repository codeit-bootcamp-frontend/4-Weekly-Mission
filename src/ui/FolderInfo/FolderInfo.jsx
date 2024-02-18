import { FolderInfoFolder, FolderInfoOwner, FolderInfoProfile, StyledFolderInfo } from "./FolderInfoCss";


export const FolderInfo = ({ profileImage, ownerName, folderName }) => {
  return (
    <StyledFolderInfo>
      <FolderInfoProfile src={profileImage} alt="폴더 소유자 프로필 이미지" />
      <FolderInfoOwner>{ownerName}</FolderInfoOwner>
      <FolderInfoFolder>{folderName}</FolderInfoFolder>
    </StyledFolderInfo>
  );
};
