import React from "react";
import { FolderInfo } from "../components/folder/folderInfo";
import { FolderList } from "../components/folder/folderList";
import { FolderSearchBar } from "../components/folder/folderSearchBar";
import { FavoriteList } from "../components/folder/favoriteList";
import { useFavoriteList } from "../hooks/useFavoriteList";
import "./mainPage.css";
export const MainPage = () => {
  const { favoriteList } = useFavoriteList();
  return (
    <div className="mainPageContainer">
      <FolderInfo />
      <div className="mainPageWrapper">
        <FolderSearchBar /> 
        <div className="folderBox">
          <FolderList />
        </div>
      </div>
    </div>
  );
};
