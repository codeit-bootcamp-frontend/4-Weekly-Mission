import ModalLayout from "../ModalLayout";
import { MODALS } from "../modals";
import styles from "./AddToFolderModal.module.css";
import { useState, useEffect } from "react";
import { getFolderListData } from "../../api/api";
import FolderInModal from "./FolderInModal";

//types
import { FolderList } from "../../pages/Folder";

interface Props {
  url: string;
  isModalClicked: {
    deleteLink?: boolean;
    addToFolder: boolean;
  };
  handleClickModal: (type: "deleteLink" | "addToFolder") => void;
  linkValue?: any;
  makeEmptyValue?: any;
}

function AddToFolderModal({
  url,
  isModalClicked,
  handleClickModal,
  linkValue,
  makeEmptyValue,
}: Props) {
  const [folderList, setFolderList] = useState<FolderList[]>([]);
  const [clickedFolderId, setClickedFolderID] = useState<number | null>(null);
  const { addToFolder } = MODALS;

  const onClickCloseButton = () => {
    handleClickModal("addToFolder");
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

  const onClickFolder = (id: number) => {
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
