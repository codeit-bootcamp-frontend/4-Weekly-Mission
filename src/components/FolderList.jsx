import { useEffect, useState } from "react";
import { getFolderInfo } from "../api/api";
import Button from "./Button";
import plusIcon from "../images/Icon_plus.svg";
import styles from "../css/FolderList.module.css";

function FolderList() {
  const [folderListData, setFolderListData] = useState([]);

  const getFolderData = async (path) => {
    const { data } = await getFolderInfo(path);
    
    if (!data) return;

    setFolderListData(data);
  }

  useEffect(() => {
    getFolderData('folders');
  }, [])

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div>
          <Button type="button" key={0}>전체</Button>
          {folderListData.map((item) => {
            return (
                <Button type="button" key={item.id}>{item.name}</Button>
            )
          })}
        </div>
          <button className={styles.addFolderBtn} type="button">
            폴더 추가
            <img src={plusIcon} alt="plus-Icon" />
          </button>
      </div>
    </div>
  );
}

export default FolderList;