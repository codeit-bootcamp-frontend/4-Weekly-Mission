import React, { useEffect, useState } from "react";
import { getFolder, getUser } from "../api";

// components
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import CardList from "../components/shared/CardList";
import SearchBar from "../components/common/searchBar/SearchBar";
import SharedInfo from "../components/shared/SharedInfo";

// style
import "../pages/Shared.css";

const Shared = () => {
  const [items, setItems] = useState([]);
  const [folderInfo, setFolderInfo] = useState("");
  const [folderName, setFolderName] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [order, setOrder] = useState("createdAt");

  const sortedItems = items.sort((a, b) => b[order].localeCompare(a[order]));
  // 카드 아이템 요청
  const handleLoadItems = async () => {
    let result;

    try {
      result = await getFolder();
    } catch (error) {
      console.log(error);
      return;
    }
    const { links, owner, name } = result.folder;
    setItems(links);
    setFolderInfo(owner);
    setFolderName(name);
  };

  // 유저 정보 요청
  const handleLoadUser = async () => {
    let result;

    try {
      result = await getUser();
    } catch (error) {
      console.log(error);
      return;
    }
    setUserInfo(result);
  };

  useEffect(() => {
    handleLoadItems();
    handleLoadUser();
  }, []);

  return (
    <div className="Shared">
      <Header userInfo={userInfo} />
      <div className="Shared-main">
        <SharedInfo folderInfo={folderInfo} folderName={folderName} />
        <div className="Shared-content-wrapper">
          <SearchBar />
          <CardList items={sortedItems} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Shared;
