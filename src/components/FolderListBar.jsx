import styles from "./FolderListBar.module.css";
import FolderButton from "./FolderButton";
import addImg from "../images/add.svg";
import { useState, useMemo } from "react";
import FolderOptions from "./FolderOptions";
import AddFolderModal from "../modal/AddFolderModal";
import EditModal from "../modal/EditModal";
import { MODALS } from "../modal/modals";
import DeleteFolderModal from "../modal/DeleteFolderModal/DeleteFolderModal";

const WHOLE_BUTTON = {
  id: 1,
  created_at: "2023-06-04T20:59:39.293024+00:00",
  name: "전체",
  user_id: 1,
  favorite: true,
  link: {
    count: 0,
  },
};

function FolderListBar({ folderList, onClick }) {
  const [currentFolderName, setCurrentFolderName] = useState("");
  const [currentFolderId, setCurrentFolderId] = useState(1);
  const [isModalClicked, setIsModalClicked] = useState({
    add: false,
    edit: false,
    deleteFolder: false,
  });

  const getLinksbyId = (id) => {
    onClick(id);
  };

  const changeFolder = (folder) => {
    const folderName = folder && folder.name;
    const folderId = folder && folder.id;
    setCurrentFolderName(folderName);
    setCurrentFolderId(folderId);
    getLinksbyId({ folderId: `${folderId}` });
  };

  const changeClickedId = (id) => {
    setCurrentFolderId(id);
  };

  const handleModalClick = (type) => {
    const value = isModalClicked[type];
    setIsModalClicked({ ...isModalClicked, [type]: !value });
  };

  const newFolderList = useMemo(() => {
    return [WHOLE_BUTTON, ...folderList];
  }, [folderList]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.btnContainer}>
          {newFolderList.map((folder) => (
            <FolderButton
              key={folder.id}
              folder={folder}
              onClick={changeFolder}
              isClicked={folder.id === currentFolderId}
              changeClickedId={() => changeClickedId(folder.id)}
            />
          ))}
        </div>
        <div
          className={
            currentFolderId === 1 ? styles.invisible : styles.addFolderContainer
          }
          onClick={() => handleModalClick(MODALS.addFolder.type)}
        >
          <div className={styles.addFolderText}>폴더 추가</div>
          <img className={styles.addImg} src={addImg} alt="addImg" />
        </div>
      </div>
      <div className={styles.folderOptionsContainer}>
        <FolderOptions
          folderName={currentFolderName}
          folderId={currentFolderId}
          handleModalClick={handleModalClick}
        />
      </div>
      <AddFolderModal
        isModalClicked={isModalClicked}
        handleModalClick={handleModalClick}
      />
      <EditModal
        isModalClicked={isModalClicked}
        handleModalClick={handleModalClick}
      />
      <DeleteFolderModal
        folderName={currentFolderName}
        isModalClicked={isModalClicked}
        handleModalClick={handleModalClick}
      />
    </>
  );
}

export default FolderListBar;
