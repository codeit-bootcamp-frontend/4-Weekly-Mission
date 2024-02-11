import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar/Navbar";
import { fetchFolderData } from "../../services/api";
import Header from "./components/Header";
import List from "./components/List";
import Input from "./components/Input";

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
      <Navbar />
      <Header fileImg={fileImg} ownerName={ownerName} folderName={folderName} />
      <Input />
      <List items={items} />
    </div>
  );
}

export default SharedPage;
