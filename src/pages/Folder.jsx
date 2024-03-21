import { useState, useEffect } from "react";
import { fetchFolders, fetchLinks } from "../component/FolderToolBar/fetchData";
import { ALL } from "../utils/utils";
import Footer from "../component/Footer/Footer";
import Navigation from "../component/Navigation/Navigation";
import InputSection from "../component/InputSection/InputSection";
import SearchBar from "../component/MainSection/SearchBar/SearchBar";
import FolderToolBar from "../component/FolderToolBar/FolderToolBar";
import "./page.css";

const Folder = () => {
  const [folderNameData, setFolderNameData] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedButtonName, setSelectedButtonName] = useState(ALL);

  useEffect(() => {
    fetchFolders()
      .then((data) => {
        setFolderNameData(data);
        return fetchLinks();
      })
      .then((data) => {
        setLinks(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const onFolderSelect = (folderId) => {
    if (folderId === ALL) {
      setSelectedButtonName(ALL);
      fetchLinks()
        .then((data) => {
          setLinks(data);
        })
        .catch((error) => console.error("Error:", error));
      return;
    } else {
      const folderName =
        folderNameData.find((button) => button.id === folderId)?.name || ALL;
      setSelectedButtonName(folderName);
      fetchLinks(folderId)
        .then((data) => {
          setLinks(data);
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <>
      <Navigation position="static" />
      <section className="main-section">
        <InputSection folderNameData={folderNameData} />
        <div className="wrap">
          <SearchBar />
          <FolderToolBar
            folderNameData={folderNameData}
            links={links}
            selectedButtonName={selectedButtonName}
            onFolderSelect={onFolderSelect}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Folder;
