import LinkSearchInput from "./LinkSearchInput";
import FolderFilterBox from "./FolderFilterBox";
import LinkFuncButtonBox from "./LinkFuncButtonBox";
import styles from "./FolderPageMain.module.css";
import AddFolderButton from "./AddFolderButton";
import LinkList from "./LinkList";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

const folderUrl = "https://bootcamp-api.codeit.kr/api/users/1/folders";

function FolderPageMain() {
  const { data: folderData } = useFetch(folderUrl);
  const [folderName, setFolderName] = useState("");
  const [isShowFuncButotonBox, setIsShowFuncButtonBox] = useState(true);
  const [folderId, setFolderId] = useState();

  return (
    <div className={styles.main_wrapper}>
      <LinkSearchInput />
      <div className={styles.folder_page_content_wrapper}>
        <div className={styles.folder_filter_wrapper}>
          <FolderFilterBox
            folderData={folderData}
            setFolderName={setFolderName}
            setIsShowFuncButtonBox={setIsShowFuncButtonBox}
            isShowFuncButotonBox={isShowFuncButotonBox}
            folderId={folderData}
            setFolderId={setFolderId}
          />
          <AddFolderButton />
        </div>
        <div className={styles.folder_title_box}>
          <h1 className={styles.folder_title}>{folderName}</h1>
          {isShowFuncButotonBox && <LinkFuncButtonBox />}
        </div>
        <LinkList folderId={folderId} />
      </div>
    </div>
  );
}

export default FolderPageMain;
