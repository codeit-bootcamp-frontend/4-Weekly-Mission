import { Footer, CardList } from "@components";
import {
  FolderAddLinkArea,
  FolderCategory,
  FolderHeader,
  FolderControl,
} from "../index";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { getFolderList, getLinks } from "@api/api";
import { useSearch } from "@hooks/useSearch";
import SearchInput from "components/SearchInput";

export default function FolderMain() {
  const [folders, setFolders] = useState([]);
  const [selectedName, setSelectedName] = useState("전체");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [links, setLinks] = useState([]);
  const search = useSearch();
  const [style, setStyle] = useState({});
  const flag = useRef(false);

  const handleSelectedFolder = ({ name, id }: { name: string; id: number }) => {
    setSelectedName(name);
    setSelectedId(id);
  };

  const loadFolderList = async (option: { userId: number }) => {
    try {
      const folders = await getFolderList(option);
      setFolders(folders.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadLinks = async (option: {
    userId: number;
    folderId: number | null;
  }) => {
    try {
      const links = await getLinks(
        option as { userId: number; folderId: number }
      );
      console.log(links);
      setLinks(links.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFolderList({ userId: 4 });
    loadLinks({ userId: 4, folderId: selectedId });
  }, [selectedId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.target.id === "mainEntry") {
            if (!entry.isIntersecting) {
              setStyle({
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
              });
            } else {
              setStyle({});
            }
          } else if ((entry.target.id = "mainExit")) {
            if (entry.isIntersecting) {
              setStyle({});
              flag.current = true;
            } else {
              if (flag.current) {
                setStyle({
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 9999,
                });
                flag.current = false;
              }
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    observer.observe(document.querySelector("#mainEntry") as HTMLElement);
    observer.observe(document.querySelector("#mainExit") as HTMLElement);
  }, []);

  return (
    <main>
      <div style={{ backgroundColor: "red", height: "180px" }}>
        <FolderAddLinkArea style={style} folders={folders} />
      </div>
      <div id="mainContainer" className={styles.mainContainer}>
        <div id="mainEntry"></div>
        <SearchInput />
        {search.query[0] && (
          <p className={styles.searchResult}>
            <span style={{ color: "#000" }}>{search.query[0]}</span>로 검색한
            결과입니다
          </p>
        )}
        <FolderCategory
          folders={folders}
          selectedId={selectedId}
          onSelectedFolder={handleSelectedFolder}
        />
        <FolderControl folderName={selectedName} />

        {links?.length === 0 ? (
          <div className={styles.emptyArea}>저장된 링크가 없습니다</div>
        ) : (
          <CardList links={links} folders={folders} />
        )}
      </div>
      <div id="mainExit"></div>
    </main>
  );
}
