import React, { useEffect, useState } from "react";
import { fetchFolderData } from "services/api";
import Header from "./components/Header";
import CardList from "components/CardList/CardList";
import style from "./shared.module.css";
import SearchBar from "components/Input/SearchBar/SearchBar";

function SharedPage() {
  const [fileImg, setFileImg] = useState(null);
  const [ownerName, setOwnerName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = async () => {
    let data;
    try {
      setIsLoading(true);
      data = await fetchFolderData();
    } catch (error) {
      return;
    } finally {
      setIsLoading(false);
    }
    const { count, links, name, owner } = data.folder;
    setOwnerName(owner.name);
    setFileImg(owner.profileImageSource);
    setFolderName(name);
    setItems(links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Header fileImg={fileImg} ownerName={ownerName} folderName={folderName} />
      <div className={style.container}>
        <div className={style.content}>
          <SearchBar type={"text"}/>
          <CardList items={items} />
        </div>
      </div>
    </div>
  );
}

export default SharedPage;
