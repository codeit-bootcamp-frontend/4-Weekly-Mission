import "./App.css";
import Navigation from "../Navigation/Navigation";
import FolderOwner from "../FolderOwner/FolderOwner";
import Footer from "../Footer/Footer";
import LinkItems from "../LinkItems/LinkItems";
import { getFolderData } from "../../apis/api";
import { useEffect, useState } from "react";

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
