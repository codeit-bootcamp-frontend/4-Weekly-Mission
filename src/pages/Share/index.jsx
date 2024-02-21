// import Header from "components/Header";
// import Footer from "components/Footer";
// import CardList from "components/CardList";
import { Header, Footer, CardList } from "components";
import styles from "./styles.module.css";
import SearchIcon from "assets/Search.png";
import { useEffect, useState } from "react";
import { getFolderInfo } from "api/api";
import { useAsync } from "hooks/useAsync";

export default function Share() {
  const [search, setSearch] = useState("");
  const [folderInfo, setFolderInfo] = useState({});
  const [_, error, getFolderInfoAsync] = useAsync(getFolderInfo);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const loadFolderInfo = async () => {
    try {
      const { folder } = await getFolderInfoAsync();
      setFolderInfo(folder);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadFolderInfo();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className={styles["main-headings"]}>
          <div className={styles["profile"]}>
            <img
              className={styles["profile-cover"]}
              src={folderInfo?.owner?.profileImageSource}
              alt="profile"
            />
            <div className={styles["profile-author"]}>
              @{folderInfo?.owner?.name}
            </div>
            <h2 className={styles["profile-title"]}>{folderInfo?.name}</h2>
            {error?.message && <div>{error.message}</div>}
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
          {error?.message && <div>{error.message}</div>}

          <CardList links={folderInfo.links} />
        </div>
      </main>

      <Footer />
    </>
  );
}
