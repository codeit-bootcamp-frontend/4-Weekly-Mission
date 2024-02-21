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
    id: null,
    name: "전체",
  });

  console.log(folderState);

  const filterHandler = (id, name) => {
    // 새로운 값과 기존 값이 동일한지 확인
    if (folderState.name === name && folderState.id === id) {
      // 동일하다면 '전체'와 null로 업데이트
      setFolderState({
        id: null,
        name: "전체",
      });
    } else {
      // 다르다면 새로운 값으로 업데이트
      setFolderState({
        id: id,
        name: name,
      });
    }
  };

  useEffect(() => {
    getSampeUser().then(setUser);
    getUserFolder().then(setFolder);
  }, []);

  useEffect(() => {
    getFolderLink(folderState.id).then(setLink);
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
