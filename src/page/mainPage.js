import React from "react";
import { FolderInfo } from "../components/folder/folderInfo";
import { FolderList } from "../components/folder/folderList";
import { FolderSearchBar } from "../components/folder/folderSearchBar";
import "./mainPage.css";
export const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <FolderInfo />
      <div className="mainPageWrapper">
        <FolderSearchBar />
        <FolderList />
      </div>
    </div>
  );
};
