import React, { useState, useEffect } from "react";
import { getUser } from "../../api";
import Card from "../common/Cards";
import { SearchBar } from "../common/SearchBar";
import { CardControl } from "./CardControl";
import AppNav from "../common/AppNav";
import AppFooter from "../common/AppFooter";
import FolderSorting from "./FolderSorting";
import { AddLinkBar } from "./AddLinkBar";

export function FolderMain() {
  const [userInfo, setUserInfo] = useState([]);

  async function handleFolderInfo() {
    const result = await getUser();
    if (!result) {
      return;
    }
    setUserInfo(result);
  }

  useEffect(() => {
    handleFolderInfo();
  }, []);

  return (
    <>
      <AppNav userInfo={userInfo}></AppNav>
      <AddLinkBar></AddLinkBar>
      <SearchBar></SearchBar>
      <FolderSorting></FolderSorting>
      <CardControl></CardControl>
      <Card></Card>
      <AppFooter />
    </>
  );
}
