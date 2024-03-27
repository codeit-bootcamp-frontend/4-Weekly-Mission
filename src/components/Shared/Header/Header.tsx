import React from "react";
import * as S from "./HeaderStyled.tsx";

interface HeaderProps {
  profileImage: string;
  ownerName: string;
  folderInfo: string;
}
function Header({ profileImage, ownerName, folderInfo }: HeaderProps) {
  return (
    <S.Header>
      <S.Profile src={profileImage} alt="폴더 소유자 프로필 이미지" />
      <S.Owner>{ownerName}</S.Owner>
      <S.FolderInfo>{folderInfo}</S.FolderInfo>
    </S.Header>
  );
}

export default Header;
