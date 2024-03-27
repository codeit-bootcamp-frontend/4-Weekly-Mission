import * as S from "./FolderInfoStyled";

interface ProfileInfo {
  profileImage: string;
  ownerName: string;
  folderName: string;
}

export default function FolderInfo({
  profileImage,
  ownerName,
  folderName,
}: ProfileInfo) {
  return (
    <S.FolderInfoContainer>
      <S.FolderInfoProfile
        className="FolderInfo-profile"
        src={profileImage}
        alt="폴더 소유자 프로필 이미지"
      />
      <S.FolderInfoOwner>{ownerName}</S.FolderInfoOwner>
      <S.FolderInfoFolder>{folderName}</S.FolderInfoFolder>
    </S.FolderInfoContainer>
  );
}
