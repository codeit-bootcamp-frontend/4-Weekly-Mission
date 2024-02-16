import FolderList from "../components/FolderList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddLinkBar from "../components/AddLinkBar";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import { getFolderLinks } from "../api";
import { useState, useEffect } from "react";

const FolderPage = () => {
  const [items, setItems] = useState([]);
  const handleLoad = async () => {
    const { data } = await getFolderLinks();
    setItems(data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Header />
      <AddLinkBar />
      <SearchBar />
      <FolderList />
      <CardList items={items} />
      <Footer />
    </div>
  );
};

export default FolderPage;
