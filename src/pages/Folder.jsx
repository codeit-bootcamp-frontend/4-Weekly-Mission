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
        setFolderState={setFolderState}
      />
    </main>
  );
}

export default Folder;
