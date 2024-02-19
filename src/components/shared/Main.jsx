import React, { useState, useEffect } from "react";
import { getFolder, getUser } from "../../api";
import AppNav from "../common/AppNav";
import AppFooter from "../common/AppFooter";
import AppHeader from "../AppHeader";
import { SearchBar } from "../common/SearchBar";
import Card from "../common/Cards";
import "./Main.css";

export function Main() {
  const [folderInfo, setFolderInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  async function handleFolderInfo() {
    const result = await getFolder();
    if (!result) {
      return;
    }
    setFolderInfo(result);
  }

  async function handleUserInfo() {
    const result = await getUser();
    if (!result) {
      return;
    }
    setUserInfo(result);
  }

  useEffect(() => {
    handleFolderInfo();
    handleUserInfo();
  }, []);

  return (
    <>
      <AppNav userInfo={userInfo} />
      <AppHeader folderInfo={folderInfo} />
      <SearchBar />
      <Card />
      <AppFooter />
    </>
  );
}
