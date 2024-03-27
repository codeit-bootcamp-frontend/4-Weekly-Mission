import { useState, useEffect } from "react";
import { acceptDataFromApi } from "src/Utils/Api";
import * as S from "./SharePageProfile.style";

/**
 * @description SharePage에서 해당 폴더의 이름과 그 주인을 보여주는 컴포넌트 입니다.
 * @returns
 */
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
    <S.SharePageProfileSection>
      <S.SharePageProfileImg src={folderImg} alt="" />
      <S.SharePageFolderOwnerName className="lb-body1-regular">{`${folderAccountName}`}</S.SharePageFolderOwnerName>
      <S.SharePageFolderName className="lb-h1-semibold">{`${folderName}`}</S.SharePageFolderName>
    </S.SharePageProfileSection>
  );
};

export default ShareFolderProfile;
