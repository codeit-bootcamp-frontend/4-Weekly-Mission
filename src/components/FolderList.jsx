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
  const [currentId, setCurrentId] = useState(0);
  const [folderName, setFolderName] = useState("전체");

  //button의 id와 이름 가져오는 함수.
  //다음 구현할 것 = 버튼 누를 때마다 fetch 날려서 데이터 가져오기. 데이터로 링크 카드 생성.
  const changeFolderClick = (id, name) => {
    setCurrentId(id);
    setFolderName(name);
  }

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
          <Button onClick={() => changeFolderClick(0, '전체')} type="button" key={0}>전체</Button>
          {folderListData.map((item) => {
            return (
                <Button onClick={() => changeFolderClick(item.id, item.name)} type="button" key={item.id}>{item.name}</Button>
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
        <p>{folderName}</p>
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