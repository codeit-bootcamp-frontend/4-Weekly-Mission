import { useEffect, useState } from "react";
import FolderItem from "./FolderItem";
import styles from "../../css/FolderList.module.css";
function FolderList() {
  const [folderList, setFolderList] = useState({});

  useEffect(() => {
    const fetchFolderData = async () => {
      const res = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/folder"
      );
      const result = res.json();
      return result;
    };
    fetchFolderData().then((res) => setFolderList(res));
  }, []);
  return (
    <div className={styles.folder_list_wrapper}>
      {folderList.folder?.links.map((i) => {
        return (
          <a href={i.url} className={styles.folder_link} key={i.id}>
            <FolderItem
              key={i.id}
              folderTitle={i.title}
              folderImageSource={i.imageSource}
              folderDate={i.createdAt}
            />
          </a>
        );
      })}
    </div>
  );
}

export default FolderList;
