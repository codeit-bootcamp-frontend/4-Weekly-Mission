import Header from "components/Header";
import Footer from "components/Footer";
import CardList from "components/CardList";
import styles from "./Folder.module.css";
import SearchIcon from "assets/Search.png";
import { useEffect, useState } from "react";
import { getFolderList, getLinks } from "api/api";
import deleteImg from "assets/delete.png";
import penImg from "assets/pen.png";
import shareImg from "assets/share.png";
import linkImg from "assets/link.png";
import useWindowSize from "hooks/useWindowSize";

export default function Folder() {
  const [search, setSearch] = useState("");
  const [folders, setFolders] = useState([]);
  const [selectedfolderId, setSelectedFolderId] = useState(null);
  const [links, setLinks] = useState([]);
  const [windowSize] = useWindowSize();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleTagClick = (id) => {
    setSelectedFolderId(id);
  };

  const handleEntireTagClick = () => {
    setSelectedFolderId(null);
  };

  const loadFolderList = async (option) => {
    try {
      const folders = await getFolderList(option);
      setFolders(folders.data);
      // console.log(folders.data);
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
    loadLinks({ userId: 1, folderId: selectedfolderId });
  }, [selectedfolderId]);

  return (
    <>
      <Header />
      <main>
        <div className={styles["main-headings"]}>
          <div
            style={{ maxWidth: "832px", margin: "0 auto", padding: "0 32px" }}
          >
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid #6d6afe",
                borderRadius: "10px",
                padding: "12px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
              className="linkSearch"
            >
              <img src={linkImg} alt="linkIconImg" />
              <input
                style={{ width: "80%", textAlign: "initial" }}
                type="url"
                placeholder="링크를 추가해 보세요"
              />
              <button className={styles.btn}>추가하기</button>
            </div>
          </div>
        </div>

        <div className={styles["wrapper"]}>
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "25px",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <div className={styles.tags}>
              <span
                className={`${styles.tag} ${
                  selectedfolderId === null ? styles.selected : ""
                }`}
                onClick={handleEntireTagClick}
              >
                전체
              </span>
              {folders.map((folder) => (
                <span
                  className={`${styles.tag} ${
                    folder.id === selectedfolderId ? styles.selected : ""
                  }`}
                  key={folder.id}
                  onClick={() => handleTagClick(folder.id)}
                >
                  {folder.name}
                </span>
              ))}
            </div>
            <span
              className={`${styles.folderAddBtn} ${
                windowSize < 580 ? styles.floating : ""
              }`}
            >
              폴더추가+
            </span>
          </div>

          <div className={styles.linksHeader}>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              유용한 글
            </div>

            {selectedfolderId === null ? (
              <></>
            ) : (
              <div style={{ display: "flex", gap: "10px" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <img src={shareImg} alt="shareIconImage" />
                  <span>공유</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <img src={penImg} alt="penIconImage" />
                  <span>이름 변경</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <img src={deleteImg} alt="deleteIconImage" />
                  <span>삭제</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {links?.length === 0 && (
          <div className={styles["wrapper"]}>
            <div
              style={{
                textAlign: "center",
                fontSize: "1.3rem",
                height: "190px",
              }}
            >
              저장된 링크가 없습니다
            </div>
          </div>
        )}
        <CardList links={links} />
      </main>

      <Footer />
    </>
  );
}
