import { useState, useEffect } from "react";
import { fetchFolders, fetchLinks } from "../component/FolderToolBar/fetchData";
import { ALL } from "../utils/utils";
import { folderDataType } from "../interfaces/folder.interface";
import Footer from "../component/Footer/Footer";
import Navigation from "../component/Navigation/Navigation";
import InputSection from "../component/InputSection/InputSection";
import SearchBar from "../component/MainSection/SearchBar/SearchBar";
import FolderToolBar from "../component/FolderToolBar/FolderToolBar";
import "./page.css";

const Folder = () => {
  const [folderData, setFolderData] = useState<folderDataType[]>([]);
  const [links, setLinks] = useState([]);
  const [selectedButtonName, setSelectedButtonName] = useState(ALL);

  useEffect(() => {
    fetchFolders()
      .then((data) => {
        setFolderData(data);
        return fetchLinks();
      })
      .then((data) => {
        setLinks(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const onFolderSelect = (folderId: string | number): void => {
    if (folderId === ALL) {
      setSelectedButtonName(ALL);
      fetchLinks()
        .then((data) => {
          setLinks(data);
        })
        .catch((error) => console.error("Error:", error));
      return;
    } else {
      const result: undefined | folderDataType = folderData.find(
        (button: folderDataType) => button.id === folderId
      );
      const folderName: string = result ? (result as folderDataType).name : ALL;
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
        <InputSection folderData={folderData} />
        <div className="wrap">
          <SearchBar />
          <FolderToolBar
            folderData={folderData}
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
