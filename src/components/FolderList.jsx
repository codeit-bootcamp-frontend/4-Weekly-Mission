import { useEffect, useState } from "react";
import { getFolderInfo } from "../api/api";
import Button from "./Button";
import styles from "../css/FolderList.module.css";
import plusIcon from "../images/Icon_plus.svg";
import shareIcon from "../images/Icon_share.svg";
import editIcon from "../images/Icon_edit.svg";
import deleteIcon from "../images/Icon_delete.svg";

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
    <>
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
    <div className={styles.content}>
      <div className={styles.linkControlBtn}>
        <p>유용한 팁</p>
        <div className={styles.controlBtns}>
          <button type="button">
            <img src={shareIcon} alt="share-Icon" />
            공유
          </button>
          <button type="button">
            <img src={editIcon} alt="edit-Icon" />
            이름 변경
          </button>
          <button type="button">
            <img src={deleteIcon} alt="delete-Icon" />
            삭제
          </button>
        </div>
      </div>
    </div>
  </>
  );
}

export default FolderList;