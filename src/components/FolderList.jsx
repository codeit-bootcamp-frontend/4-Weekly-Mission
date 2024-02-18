import { useEffect, useState } from "react";
import { getFolderInfo } from "../api/api";
import Button from "./Button";
import styles from "../css/FolderList.module.css";

function FolderList() {
  const [folderData, setFolderData] = useState([]);

  const getFolderData = async (path) => {
    const { data } = await getFolderInfo(path);
    
    if (!data) return;

    setFolderData(data);
  }

  useEffect(() => {
    getFolderData('folders');
  }, [])

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div>
          {folderData.map((item) => {
            return (
              <Button type="button" key={item.id}>{item.name}</Button>
            )
          })}
        </div>
        <div className={styles.addFolder}>
          <button className={styles.addFolderBtn} type="button">폴더 추가</button>
          <div className={styles.plusIcon}></div>
        </div>
      </div>
    </div>
  );
}

export default FolderList;