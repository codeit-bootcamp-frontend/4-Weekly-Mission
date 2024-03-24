import { useState } from "react";
import Button from "./Button";
import styles from "../css/FolderList.module.css";
import plusIcon from "../images/Icon_plus.svg";
import LinkList from "./LinkList";
import AddModal from "../modal/AddModal";
import FolderMenu from "./FolderMenu";

const FIRST_SELECTED_FOLDER = "전체";

interface Data {
  url: string;
  id: number;
  imageSource?: string;
  createdAt?: string;
  description?: string;
}

interface SearchData extends Data {
  title?: string;
}

interface Props {
  keyword: string;
  linkData: SearchData[];
  folderNameList: string[];
  currentId: number;
  folderName: string;
  onClick: (id: number, name: string) => void;
}

function FolderList({ keyword, linkData, folderNameList, currentId, folderName, onClick }: Props) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = (): void => setIsAddModalOpen(false);

  return (
    <>
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.folderList}>
          <Button onClick={() => onClick(0, FIRST_SELECTED_FOLDER)} type="button" key={0}>전체</Button>
          {folderNameList.map((item: any) => {
            return (
                <Button onClick={() => onClick(item.id, item.name)} type="button" key={item.id}>{item.name}</Button>
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
    <LinkList keyword={keyword} linkData={linkData} />
  </>
  );
}

export default FolderList;