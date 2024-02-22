import styles from "./FolderListBar.module.css";
import FolderButton from "./FolderButton";
import addImg from "../images/add.svg";
import { useState, useMemo } from "react";
import FolderOptions from "./FolderOptions";

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
  const [clickedIdx, setClickedIdx] = useState(0);

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

  const newFolderList = useMemo(() => {
    return [WHOLE_BUTTON, ...folderList];
  }, [folderList]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.btnContainer}>
          {newFolderList.map((folder, idx) => (
            <FolderButton
              key={folder.id}
              folder={folder}
              onClick={changeFolder}
              isClicked={idx === clickedIdx}
              setClickedIdx={() => setClickedIdx(idx)}
            />
          ))}
        </div>
        <div
          className={
            currentFolderId === 1 ? styles.invisible : styles.addFolderContainer
          }
        >
          <div className={styles.addFolderText}>폴더 추가</div>
          <img className={styles.addImg} src={addImg} alt="addImg" />
        </div>
      </div>
      <div className={styles.folderOptionsContainer}>
        <FolderOptions
          folderName={currentFolderName}
          folderId={currentFolderId}
        />
      </div>
    </>
  );
}

export default FolderListBar;
