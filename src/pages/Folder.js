import { useState, useEffect, useCallback } from "react";
import { getUserFolderInfo } from "./../api";

import HeaderElement from "./../components/common/HeaderElement";
import GlobalStyle from "./../components/common/GlobalStyle";
import FolderInput from "./../components/Folder/FolderInput";
import FolderList from "./../components/common/FolderList";
import Input from "../components/common/Input";
import Menus from "../components/Folder/Menus";
import FolderTitle from "../components/Folder/FolderTitle";

const Folder = () => {
  const [folders, setFolders] = useState([]);

  const HandleLoad = useCallback(async () => {
    let results;
    let foldersArr;
    try {
      results = await getUserFolderInfo();
      foldersArr = await results.data;
      // await console.log(foldersArr);
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
      <HeaderElement $positionval={"static"} />
      <FolderInput />
      <Input />
      <Menus />
      <FolderTitle />
      <FolderList items={folders}></FolderList>
    </>
  );
};

export default Folder;
