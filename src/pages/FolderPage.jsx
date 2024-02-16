import "./styles/FolderPage.css";
import { useEffect, useState } from "react";
import FolderPageHeader from "../components/FolderPageHeader.js";
import Cards from "../components/Cards.js";
import SearchBar from "../components/SearchBar.js";
import { fetchFolders, fetchFolder } from "../api.js";
import FoldersList from "../components/FoldersList.js";
import FolderToolbar from "../components/FolderToolbar.js";

export default function FolderPage() {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [currentFolder, setCurrentFolder] = useState([]);
  const [search, setSearch] = useState("");

  async function getFolders() {
    try {
      const response = await fetchFolders();
      setFolders(response);
    } catch (e) {
      alert(e);
      return;
    }
  }

  async function getFolder(id) {
    try {
      const response = await fetchFolder(id);
      setCurrentFolder(response);
    } catch (e) {
      alert(e);
      return;
    }
  }

  useEffect(() => {
    getFolders();
    getFolder(selectedFolder);
  }, [selectedFolder]);

  return (
    <>
      <FolderPageHeader />
      <div className="folder-page-contents">
        <SearchBar search={search} setSearch={setSearch} />
        <FoldersList
          folders={folders}
          selectedFolder={selectedFolder}
          setSelectedFolder={setSelectedFolder}
        />
        <FolderToolbar />
        <Cards links={currentFolder} />
      </div>
    </>
  );
}
