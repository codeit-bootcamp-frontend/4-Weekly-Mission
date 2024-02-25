import ModalLayout from "../ModalLayout";
import { MODALS } from "../modals";
import styles from "./AddToFolderModal.module.css";
import { useState, useEffect } from "react";
import { getFolderListData } from "../../api/api";
import FolderInModal from "./FolderInModal";

function AddToFolderModal({
  url,
  isModalClicked,
  onToggleModal,
  linkValue,
  makeEmptyValue,
}) {
  const [folderList, setFolderList] = useState([]);
  const [clickedFolderId, setClickedFolderID] = useState(null);
  const { addToFolder } = MODALS;

  const onClickCloseButton = () => {
    onToggleModal(addToFolder.type);
    if (linkValue) makeEmptyValue();
  };

  const getFolderList = async () => {
    try {
      const folderListData = await getFolderListData();
      const { data } = folderListData;
      setFolderList(data);
    } catch (err) {
      console.error(err);
      setFolderList([]);
    }
  };

  const onClickFolder = (id) => {
    setClickedFolderID(id);
  };

  useEffect(() => {
    getFolderList();
  }, []);

  return (
    <ModalLayout
      title={addToFolder.title}
      isModalClicked={isModalClicked.addToFolder}
      onClickCloseButton={onClickCloseButton}
    >
      <div className={styles.url}>{url}</div>
      <div className={styles.folderList}>
        {folderList.map((folder) => (
          <FolderInModal
            key={folder.id}
            folder={folder}
            isClicked={folder.id === clickedFolderId}
            onClickFolder={() => onClickFolder(folder.id)}
          />
        ))}
      </div>
      <button className={styles.button}>{addToFolder.buttonName}</button>
    </ModalLayout>
  );
}

export default AddToFolderModal;
