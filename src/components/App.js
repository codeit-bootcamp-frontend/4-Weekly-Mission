import "./App.css";
import React, { useState, useEffect } from "react";
import { getFolder, getUser } from "../api.js";
import AppNav from "../common/AppNav.js";
import AppFooter from "../common/AppFooter.js";
import AppHeader from "./AppHeader.js";
import { SearchBar } from "../common/SearchBar.js";
import Card from "./Cards.js";

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
