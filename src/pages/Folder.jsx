import React, { useEffect, useState } from "react";
import Header from "../components/common/header/Header";
import {
  getSampeUser,
  getUserFolder,
  getFolderLink,
} from "../utils/Api";
import FolderContainer from "../components/folder/Container";
import Banner from "../components/folder/Banner";

function Folder() {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);
  const [link, setLink] = useState(null);
  const [folderState, setFolderState] = useState({
    name: "전체",
    value: null,
  });

  const filterHandler = (name, id) => {
    // 새로운 값과 기존 값이 동일한지 확인
    if (folderState.name === name && folderState.value === id) {
      // 동일하다면 '전체'와 null로 업데이트
      setFolderState({
        name: "전체",
        value: null,
      });
    } else {
      // 다르다면 새로운 값으로 업데이트
      setFolderState({
        name: name,
        value: id,
      });
    }
  };

  useEffect(() => {
    getSampeUser().then(setUser);
    getUserFolder().then(setFolder);
  }, []);

  useEffect(() => {
    getFolderLink(folderState.value).then(setLink);
  }, [folderState]);

  return (
    <main>
      <Header user={user} />
      <Banner />
      <FolderContainer
        folder={folder}
        cardLink={link}
        folderState={folderState}
        setFolderState={filterHandler}
      />
    </main>
  );
}

export default Folder;
