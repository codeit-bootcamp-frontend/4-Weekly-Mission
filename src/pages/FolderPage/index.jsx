import "./style.css";
import { useEffect, useState } from "react";
import {
  FolderPageHeader,
  Cards,
  Searchbar,
  FoldersList,
  FolderToolbar,
} from "../../components";
import { fetchFolders, fetchFolder } from "../../api";

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
        <Searchbar search={search} setSearch={(str) => setSearch(str)} />
        <FoldersList
          folders={folders}
          selectedFolder={selectedFolder}
          setSelectedFolder={(id) => setSelectedFolder(id)}
        />
        <FolderToolbar />
        <Cards links={currentFolder} />
      </div>
    </>
  );
}
