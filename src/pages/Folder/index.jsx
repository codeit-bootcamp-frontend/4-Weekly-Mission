// import Footer from "components/Footer";
// import CardList from "components/CardList";
import { Footer, CardList } from "components";
// import FolderHeader from "./components/FolderHeader";
// import FolderAddLinkArea from "./components/FolderAddLinkArea";
// import FolderCategory from "./components/FolderCategory";
// import FolderControl from "./components/FolderControl";
import {
  FolderAddLinkArea,
  FolderCategory,
  FolderHeader,
  FolderControl,
} from "./components";
import styles from "./styles.module.css";
import SearchIcon from "assets/Search.png";
import { useEffect, useState } from "react";
import { getFolderList, getLinks } from "api/api";

export default function Folder() {
  const [search, setSearch] = useState("");
  const [folders, setFolders] = useState([]);
  const [selectedName, setSelectedName] = useState("전체");
  const [selectedId, setSelectedId] = useState(null);
  const [links, setLinks] = useState([]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectedFolder = ({ name, id }) => {
    setSelectedName(name);
    setSelectedId(id);
  };

  const loadFolderList = async (option) => {
    try {
      const folders = await getFolderList(option);
      setFolders(folders.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadLinks = async (option) => {
    try {
      const links = await getLinks(option);
      console.log(links);
      setLinks(links.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFolderList({ userId: 1 });
    loadLinks({ userId: 1, folderId: selectedId });
  }, [selectedId]);

  return (
    <>
      <FolderHeader />
      <main>
        <FolderAddLinkArea />
        <div className={styles.mainContainer}>
          <div className={styles["searchBox"]}>
            <img src={SearchIcon} alt="searchIcon" />
            <input
              type="text"
              name="search"
              value={search}
              placeholder="링크를 검색해 보세요."
              onChange={handleSearchChange}
            />
          </div>

          <FolderCategory
            folders={folders}
            selectedId={selectedId}
            onSelectedFolder={handleSelectedFolder}
          />

          <FolderControl folderName={selectedName} />

          {links?.length === 0 ? (
            <div className={styles.emptyArea}>저장된 링크가 없습니다</div>
          ) : (
            <CardList links={links} />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
