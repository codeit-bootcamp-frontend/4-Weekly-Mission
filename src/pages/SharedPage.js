import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { getFolders } from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import SearchBar from "../components/SearchBar";

function SharePage() {
  const [items, setItems] = useState([]);
  const [profile, setProfile] = useState([]);
  const [folderName, setFolderName] = useState(null);

  const handleLoad = async () => {
    const { folder } = await getFolders();
    setItems(folder.links);
    setProfile(folder.owner);
    setFolderName(folder.name);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="App">
      <Header />
      <Profile profile={profile} folderName={folderName} />
      <SearchBar />
      <CardList items={items} />
      <Footer />
    </div>
  );
}

export default SharePage;
