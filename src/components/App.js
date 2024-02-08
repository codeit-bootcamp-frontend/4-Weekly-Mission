import { useState, useEffect } from "react";
import FolderList from "./FolderList";
import { getFolders, getUser } from "../api";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [folderName, setFolderName] = useState(null);

  const handleLoad = async () => {
    const { folder } = await getFolders();
    const user = await getUser();
    setItems(folder.links);
    setProfile(folder.owner);
    setFolderName(folder.name);
    setUser(user);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <Profile profile={profile} folderName={folderName} />
      <SearchBar />
      <FolderList items={items} />
      <Footer />
    </div>
  );
}

export default App;
