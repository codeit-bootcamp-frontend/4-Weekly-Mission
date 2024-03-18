import { acceptDataFromApi } from "src/Api";
import { useState, useEffect } from "react";
import * as S from "./SharePageProfile.style";

const ShareFolderProfile = function () {
  const [folderName, setFolderName] = useState("빈 폴더");
  const [folderImg, setFolderImg] = useState("favicon.png");
  const [folderAccountName, setFolderAccountName] = useState("USER_NAME");

  const FOLDER = "sample/folder";
  const USER = "sample/user";
  const loadFolderAccountName = async (requestQuery: string) => {
    const { name, profileImageSource } = await acceptDataFromApi(requestQuery);
    if (!name || !profileImageSource) return;

    setFolderAccountName(name);
    setFolderImg(profileImageSource);
  };

  const loadFolderProfileData = async (requestQuery: string) => {
    const {
      folder: { name },
    } = await acceptDataFromApi(requestQuery);
    if (!name) return;

    setFolderName(name);
  };

  useEffect(() => {
    loadFolderAccountName(USER);
    loadFolderProfileData(FOLDER);
  }, []);

  return (
    <S.SharePageProfileSection className="folder-page-profile">
      <S.SharePageProfileImg src={folderImg} alt="" />
      <S.SharePageFolderOwnerName className="user-name">{`${folderAccountName}`}</S.SharePageFolderOwnerName>
      <S.SharePageFolderName className="folder-name">{`${folderName}`}</S.SharePageFolderName>
    </S.SharePageProfileSection>
  );
};

export default ShareFolderProfile;
