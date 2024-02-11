import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import styles from "./Folder.module.css";
import AvatarImg from "assets/Avatar.png";
import SearchIcon from "assets/Search.png";
import { useEffect, useState } from "react";
import CardList from "components/CardList/CardList";
import { getFolderInfo } from "api/api";
import { useAsync } from "hooks/useAsync";

export default function Folder() {
  const [search, setSearch] = useState("");
  const [folderInfo, setFolderInfo] = useState({});
  const [isLoading, loadingError, getFolderInfoAsync] = useAsync(getFolderInfo);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const loadFolderInfo = async () => {
    const { folder } = await getFolderInfoAsync();
    setFolderInfo(folder);
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
        </div>

        <CardList links={folderInfo.links} />
        {loadingError?.message && <div>{loadingError.message}</div>}
      </main>

      <Footer />
    </>
  );
}
