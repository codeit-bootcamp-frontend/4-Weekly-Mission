import "./App.css";
import Navigation from "../Navigation/Navigation";
import FolderOwner from "../FolderOwner/FolderOwner";
import Footer from "../Footer/Footer";
import LinkItems from "../LinkItems/LinkItems";
import { getFolderData } from "../../apis/api";
import { useEffect, useState } from "react";

function App() {
  const [folderData, setFolderData] = useState(null);

  const getData = async () => {
    try {
      const data = await getFolderData();
      setFolderData(data.folder);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navigation />
      {folderData ? (
        <>
          <FolderOwner name={folderData?.name} owner={folderData?.owner} />
          <LinkItems links={folderData?.links} />
        </>
      ) : (
        <p className="loadFail">정보를 불러오지 못했습니다.</p>
      )}
      <Footer />
    </div>
  );
}

export default App;
