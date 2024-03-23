import { useEffect, useState } from "react";
import { getLinkInfo } from "../api/api";
import Button from "./Button";
import styles from "../css/FolderList.module.css";
import plusIcon from "../images/Icon_plus.svg";
import LinkList from "./LinkList";
import AddModal from "../modal/AddModal";
import FolderMenu from "./FolderMenu";

const FIRST_SELECTED_FOLDER = "전체";

function FolderList() {
  const [folderListData, setFolderListData] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [folderName, setFolderName] = useState(FIRST_SELECTED_FOLDER);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = (): void => setIsAddModalOpen(false);

  //button의 id와 이름 가져오는 함수.
  const changeFolderClick = (id: number, name: string) => {
    setCurrentId(id);
    setFolderName(name);
  }

  const getFolderData = async (path: string, id: number) => {
    const { data } = await getLinkInfo(path, id);
    
    if (!data) return;

    setFolderListData(data);
  }

  useEffect(() => {
    getFolderData('users/1/folders', 0);
  }, [])

  return (
    <>
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.folderList}>
          <Button onClick={() => changeFolderClick(0, '전체')} type="button" key={0}>전체</Button>
          {folderListData.map((item: any) => {
            return (
                <Button onClick={() => changeFolderClick(item.id, item.name)} type="button" key={item.id}>{item.name}</Button>
            )
          })}
        </div>
          <button className={styles.addFolderBtn} type="button" onClick={openAddModal}>
            폴더 추가
            <img src={plusIcon} alt="plus-Icon" />
          </button>
          <AddModal isOpenModal={isAddModalOpen} closeModal={closeAddModal}/>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.linkControlBtn}>
        <p className={styles.folderName}>{folderName}</p>
        {currentId === 0 ? null : <FolderMenu placeholder={folderName} />}
      </div>
    </div>
    <LinkList query={'users/1/links'} id={currentId === 0 ? '': currentId} />
  </>
  );
}

export default FolderList;