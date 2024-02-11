import "./App.css";
import Navigation from "./Navigation";
import FolderOwner from "./FolderOwner";
import Footer from "./Footer";
import { getFolderData } from "./api";
import { useEffect, useState } from "react";
import LinkItems from "./LinkItems";

function App() {
  const [folderData, setFolderData] = useState({});

  const getData = async () => {
    const data = await getFolderData();
    setFolderData(data.folder);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <FolderOwner name={folderData.name} owner={folderData.owner} />
      <LinkItems links={folderData.links} />
      <Footer />
    </div>
  );
}

export default App;
