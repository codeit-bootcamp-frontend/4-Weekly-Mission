import styles from "./FolderListBar.module.css";
import FolderButton from "./FolderButton";
import addImg from "../images/add.svg";
import { useState, useMemo } from "react";
import FolderOptions from "./FolderOptions";
import AddFolderModal from "../modal/AddFolderModal/AddFolderModal";
import EditModal from "../modal/EditModal/EditModal";
import { MODALS } from "../modal/modals";
import DeleteFolderModal from "../modal/DeleteFolderModal/DeleteFolderModal";
import ShareModal from "../modal/ShareModal/ShareModal";
import { copyClipBoard } from "../util/copyClipBoard";
//type
import { FolderList } from "../pages/Folder";

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

interface Props {
  folderList: FolderList[];
  onClick: (folderId: { folderId?: string }) => Promise<void>;
}

export interface IsModalClicked {
  add: boolean;
  edit: boolean;
  deleteFolder: boolean;
  share: boolean;
}

function FolderListBar({ folderList, onClick }: Props) {
  const [currentFolderName, setCurrentFolderName] = useState<string>("");
  const [currentFolderId, setCurrentFolderId] = useState<number>(1);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [isModalClicked, setIsModalClicked] = useState<IsModalClicked>({
    add: false,
    edit: false,
    deleteFolder: false,
    share: false,
  });

  const getLinksbyId = (id: { folderId: string }) => {
    onClick(id);
  };

  const changeFolder = (folder: FolderList) => {
    const folderName = folder && folder.name;
    const folderId = folder && folder.id;
    const userId = folder && folder["user_id"];
    setCurrentFolderName(folderName);
    setCurrentFolderId(folderId);
    setCurrentUserId(userId);
    getLinksbyId({ folderId: `${folderId}` });
  };

  const changeClickedId = (id: number) => {
    setCurrentFolderId(id);
  };

  const handleModalClick = (type: keyof IsModalClicked) => {
    const value = isModalClicked[type];
    setIsModalClicked({ ...isModalClicked, [type]: !value });
  };

  const makeShareLink = (userId: number | null, folderId: number) => {
    const url = `${window.location.origin}/shared?user=${userId}&folder=${folderId}`;
    copyClipBoard(url);
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
          onClick={() =>
            handleModalClick(MODALS.addFolder.type as keyof IsModalClicked)
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
      <ShareModal
        folderName={currentFolderName}
        isModalClicked={isModalClicked}
        handleModalClick={handleModalClick}
        makeShareLink={() => makeShareLink(currentUserId, currentFolderId)}
      />
    </>
  );
}

export default FolderListBar;
