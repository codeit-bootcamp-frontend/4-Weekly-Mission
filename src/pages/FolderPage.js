import { useEffect, useState } from "react";
import "./FolderPage.css";
import FolderPageHeader from "../components/FolderPageHeader";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar.js";
import { fetchFolders, fetchFolder } from "../api.js";

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
        <div className="folders-bar">
          <div className="folders">
            <div
              className={`folder ${selectedFolder === null ? "selected" : ""}`}
              onClick={() => {
                setSelectedFolder(null);
              }}
            >
              전체
            </div>
            {folders.map((folder) => (
              <div
                key={folder.id}
                className={`folder ${
                  selectedFolder === folder.id ? "selected" : ""
                }`}
                onClick={() => {
                  setSelectedFolder(folder.id);
                }}
              >
                {folder.name}
              </div>
            ))}
          </div>
          <div className="add-folder">
            <span>폴더 추가</span> <img src="images/plus.svg" alt="plus" />
          </div>
        </div>
        <div className="folder-title">
          <span>유용한 글</span>
          <div className="folder-options">
            <span className="folder-option-item">
              <img src="images/share.svg" alt="share" />
              공유
            </span>
            <span className="folder-option-item">
              <img src="images/edit.svg" alt="edit" />
              이름변경
            </span>
            <span className="folder-option-item">
              <img src="images/delete.svg" alt="delete" />
              삭제
            </span>
          </div>
        </div>
        <Cards links={currentFolder} />
      </div>
    </>
  );
}
