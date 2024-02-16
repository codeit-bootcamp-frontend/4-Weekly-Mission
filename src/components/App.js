import { useState, useEffect } from "react";
import CardList from "./CardList";
import { getFolders } from "../api";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

function App() {
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

export default App;
