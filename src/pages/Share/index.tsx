import { Header, Footer, CardList } from "../../components";
import styles from "./styles.module.css";
import SearchIcon from "../../assets/Search.png";
import { useEffect, useState } from "react";
import { getFolderInfo } from "../../api/api";
import { useAsync } from "../../hooks/useAsync";
import { FolderInfo } from "../../types";
import SearchInput from "components/SearchInput";
import { useSearch } from "@hooks/useSearch";

export default function Share() {
  const [folderInfo, setFolderInfo] = useState<FolderInfo>({} as FolderInfo);
  const [_, error, getFolderInfoAsync] = useAsync(getFolderInfo);

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
          <SearchInput />
          {error?.message && <div>{error.message}</div>}

          <CardList links={folderInfo.links} />
        </div>
      </main>

      <Footer />
    </>
  );
}
