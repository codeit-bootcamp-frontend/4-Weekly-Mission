import { useEffect, useState } from "react";
import { getLinkInfo } from "../api/api";
import Button from "./Button";
import styles from "../css/FolderList.module.css";
import plusIcon from "../images/Icon_plus.svg";
import shareIcon from "../images/Icon_share.svg";
import editIcon from "../images/Icon_edit.svg";
import deleteIcon from "../images/Icon_delete.svg";
import LinkList from "./LinkList";
import AddModal from "../modal/AddModal";
import DeleteModal from "../modal/DeleteModal";
import EditModal from "../modal/EditModal";
import ShareModal from "../modal/ShareModal";

function FolderList() {
  const [folderListData, setFolderListData] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [folderName, setFolderName] = useState("전체");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openShareModal = () => setIsShareModalOpen(true);
  const closeShareModal = () => setIsShareModalOpen(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  //button의 id와 이름 가져오는 함수.
  const changeFolderClick = (id, name) => {
    setCurrentId(id);
    setFolderName(name);
  }

  const getFolderData = async (path) => {
    const { data } = await getLinkInfo(path);
    
    if (!data) return;

    setFolderListData(data);
  }

  useEffect(() => {
    getFolderData('users/1/folders');
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
        <div className={styles.controlBtns}>
          <button className={styles.shareBtn} type="button" onClick={openShareModal}>
            <img src={shareIcon} alt="share-Icon" />
            공유
          </button>
          <ShareModal isOpenModal={isShareModalOpen} closeModal={closeShareModal} />
          <button className={styles.editBtn} type="button" onClick={openEditModal}>
            <img src={editIcon} alt="edit-Icon" />
            이름 변경
          </button>
          <EditModal isOpenModal={isEditModalOpen} closeModal={closeEditModal} placeholder={folderName}/>
          <button className={styles.deleteBtn} type="button" onClick={openDeleteModal}>
            <img src={deleteIcon} alt="delete-Icon" />
            삭제
          </button>
          <DeleteModal isOpenModal={isDeleteModalOpen} closeModal={closeDeleteModal}/>
        </div>
      </div>
    </div>
    <LinkList query={'users/1/links'} id={currentId === 0 ? '': currentId} />
  </>
  );
}

export default FolderList;