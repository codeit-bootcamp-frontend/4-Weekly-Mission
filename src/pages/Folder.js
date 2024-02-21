import { useState, useEffect, useCallback } from "react";
import { getFolderInfo } from "./../api";

import HeaderElement from "./../components/common/HeaderElement";
import GlobalStyle from "../components/common/Globalstyle";
import FolderInput from "./../components/Folder/FolderInput";
import FolderList from "./../components/common/FolderList";

const Folder = () => {
  const [folders, setFolders] = useState([]);

  const HandleLoad = useCallback(async () => {
    let results;
    let foldersArr;
    try {
      results = await getFolderInfo();
      foldersArr = await results.folder.links;
    } catch (error) {
      console.log(error);
    }

    if (!foldersArr) return;
    setFolders(foldersArr);
  }, []);

  useEffect(() => {
    HandleLoad();
  }, [HandleLoad]);

  return (
    <>
      <GlobalStyle />
      <HeaderElement />
      <FolderInput />
      <FolderList items={folders}></FolderList>
    </>
  );
};

export default Folder;