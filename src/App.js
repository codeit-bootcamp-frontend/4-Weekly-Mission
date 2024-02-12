import "./App.css";
import Navigation from "./component/Navigation";
import FolderOwner from "./component/FolderOwner";
import Footer from "./component/Footer";
import { getFolderData } from "./api";
import { useEffect, useState } from "react";
import LinkItems from "./component/LinkItems";

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
