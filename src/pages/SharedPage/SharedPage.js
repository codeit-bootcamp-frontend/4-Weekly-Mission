import React, { useEffect, useState } from "react";
import { fetchFolderData } from "services/api"
import Navbar from "layout/Navbar/Navbar";
import Footer from "layout/Footer/Footer";
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
      <Footer />
    </div>
  );
}

export default SharedPage;
