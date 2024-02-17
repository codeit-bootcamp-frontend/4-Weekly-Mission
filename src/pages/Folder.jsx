import React, { useEffect, useState } from "react";
import Header from "../components/common/header/Header";
import {
  getSampeUser,
  getUserFolder,
  getFolderLink,
} from "../utils/Api";
import FolderContainer from "../components/folder/Container";

function Folder() {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);
  const [link, setLink] = useState(null);
  console.log(folder);
  console.log(link);

  useEffect(() => {
    getSampeUser().then(setUser);
    getUserFolder().then(setFolder);
    getFolderLink().then(setLink);
  }, []);

  return (
    <main>
      <Header user={user} />
      <FolderContainer folder={folder} cardLink={link} />
    </main>
  );
}

export default Folder;
