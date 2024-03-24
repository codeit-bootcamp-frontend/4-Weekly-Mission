import { useState, useEffect } from "react";
import useSearch from "../hooks/useSearch";
import { fetchFolders, fetchLinks } from "../component/FolderToolBar/fetchData";
import { ALL } from "../utils/utils";
import { folderDataType, linksType } from "../interfaces/folder.interface";
import Footer from "../component/Footer/Footer";
import Navigation from "../component/Navigation/Navigation";
import InputSection from "../component/InputSection/InputSection";
import SearchBar from "../component/MainSection/SearchBar/SearchBar";
import FolderToolBar from "../component/FolderToolBar/FolderToolBar";
import "./page.css";

const Folder = () => {
  const [folderData, setFolderData] = useState<folderDataType[]>([]);
  const [links, setLinks] = useState<linksType[]>([]);
  const [selectedButtonName, setSelectedButtonName] = useState(ALL);

  const { setSearchKeyword, filteredItems } = useSearch(links, [
    "url",
    "title",
    "description",
  ]);

  useEffect(() => {
    fetchFolders().then(setFolderData).catch(console.error);
    fetchLinks().then(setLinks).catch(console.error);
  }, []);

  const onFolderSelect = (folderId: string | number) => {
    if (folderId === ALL) {
      setSelectedButtonName(ALL);
      fetchLinks().then(setLinks).catch(console.error);
    } else {
      const result = folderData.find((folder) => folder.id === folderId);
      const folderName = result ? result.name : ALL;
      setSelectedButtonName(folderName);
      fetchLinks(folderId).then(setLinks).catch(console.error);
    }
  };

  return (
    <>
      <Navigation position="static" />
      <section className="main-section">
        <InputSection folderData={folderData} />
        <div className="wrap">
          <SearchBar onSearch={setSearchKeyword} />
          <FolderToolBar
            folderData={folderData}
            filteredItems={filteredItems}
            selectedButtonName={selectedButtonName}
            onFolderSelect={onFolderSelect}
          />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Folder;
