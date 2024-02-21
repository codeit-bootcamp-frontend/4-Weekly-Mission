import styles from "./FolderListBar.module.css";
import FolderButton from "./FolderButton";
import addImg from "../images/add.svg";
import { useState } from "react";
import FolderOptions from "./FolderOptions";

function FolderListBar({ folderList, onClick }) {
  const wholeBtn = {
    id: 1,
    created_at: "2023-06-04T20:59:39.293024+00:00",
    name: "전체",
    user_id: 1,
    favorite: true,
    link: {
      count: 0,
    },
  };
  const newFolderList = [wholeBtn, ...folderList];
  const [nowFolderName, setNowFolderName] = useState("");
  const [nowFolderId, setNowFolderId] = useState(1);
  const [isClicked, setIsClicked] = useState(0);

  const getLinksbyId = (id) => {
    onClick(id);
  };

  const changeFolder = (folder) => {
    const folderName = folder && folder.name;
    const folderId = folder && folder.id;
    setNowFolderName(folderName);
    setNowFolderId(folderId);
    getLinksbyId({ folderId: `${folderId}` });
    // console.log("폴더가 변경되었습니다.", folder);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.btnContainer}>
          {newFolderList.map((folder, idx) => (
            <FolderButton
              key={folder.id}
              folder={folder}
              onClick={changeFolder}
              isClicked={idx === isClicked}
              setIsClicked={() => setIsClicked(idx)}
            />
          ))}
        </div>
        <div
          className={
            nowFolderId === 1 ? styles.invisible : styles.addFolderContainer
          }
        >
          <div className={styles.addFolderText}>폴더 추가</div>
          <img className={styles.addImg} src={addImg} alt="addImg" />
        </div>
      </div>
      <div className={styles.folderOptionsContainer}>
        <FolderOptions folderName={nowFolderName} folderId={nowFolderId} />
      </div>
    </>
  );
}

export default FolderListBar;
