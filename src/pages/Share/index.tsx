import { Header, Footer, CardList } from "../../components";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { getFolderInfo } from "../../api/api";
import { useAsync } from "../../hooks/useAsync";
import { FolderInfo } from "../../types";
import SearchInput from "components/SearchInput";

export default function Share() {
  const [folderInfo, setFolderInfo] = useState<FolderInfo>({} as FolderInfo);

  // 타입지정을 강제하는 방법이 있을까?
  // 제네릭이 2개면 무조건 써야 하나? -> 하나만 있으면 생략해도 되는듯 한데 -> 알아서 추론 가능한 경우는 안적어줘도 되는건가
  const [loading, error, getFolderInfoAsync] = useAsync<{ folder: FolderInfo }>(
    getFolderInfo
  );

  const loadFolderInfo = async () => {
    const data = await getFolderInfoAsync();
    if (!data) return;
    setFolderInfo(data.folder);
  };

  useEffect(() => {
    loadFolderInfo();
  }, []);

  if (loading) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <Header />
      <main>
        <div className={styles["main-headings"]}>
          <div className={styles["profile"]}>
            <img
              className={styles["profile-cover"]}
              src={folderInfo.owner.profileImageSource}
              alt="profile"
            />
            <div className={styles["profile-author"]}>
              @{folderInfo.owner.name}
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
