import "./App.css";
import React, { useState, useEffect } from "react";
import { getFolder, getUser } from "../api";
import AppNav from "./common/AppNav";
import AppFooter from "./common/AppFooter";
import AppHeader from "./AppHeader";
import { SearchBar } from "./common/SearchBar";
import Card from "./common/Cards";

function App() {
  const [folderInfo, setFolderInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  async function handleFolderInfo() {
    let result;
    result = await getFolder();
    if (!result) {
      return;
    }
    setFolderInfo(result);
  }

  async function handleUserInfo() {
    let result;
    result = await getUser();
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
    <div className="App">
      <AppNav userInfo={userInfo} />

      <AppHeader folderInfo={folderInfo} />
      <SearchBar />
      <Card />

      <AppFooter />
    </div>
  );
}

export default App;
