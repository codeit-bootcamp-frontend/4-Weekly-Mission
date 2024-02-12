import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import { getFolder, getProfile } from "./api.js";
import Input from "./components/Input.js";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";

function App() {
  const [user, setUser] = useState(null);
  const [folderName, setFolderName] = useState(null);
  const [owner, setOwner] = useState(null);
  const [links, setLinks] = useState(null);

  const handleLoad = async () => {
    const user = await getProfile();
    const { folder } = await getFolder();
    setUser(user);
    setFolderName(folder.name);
    setOwner(folder.owner);
    setLinks(folder.links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="App">
      <Header user={user} folderName={folderName} owner={owner} />
      <Input />
      <Card links={links} />
      <Footer />
    </div>
  );
}

export default App;
