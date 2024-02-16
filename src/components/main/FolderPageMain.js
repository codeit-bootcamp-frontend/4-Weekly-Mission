import LinkSearchInput from "./LinkSearchInput";
import FolderFilterBox from "./FolderFilterBox";
import LinkFuncButtonBox from "./LinkFuncButtonBox";
import styles from "./FolderPageMain.module.css";
import AddFolderButton from "./AddFolderButton";
import LinkList from "./LinkList";
import { useFetch } from "../../hooks/useFetch";
const linkDataUrl = "https://bootcamp-api.codeit.kr/api/users/3/links";

const folderUrl = "https://bootcamp-api.codeit.kr/api/users/3/folders";
function FolderPageMain() {
  const { data: folderData } = useFetch(folderUrl);
  const { data: linkData } = useFetch(linkDataUrl);
  return (
    <div className={styles.main_wrapper}>
      <LinkSearchInput />
      <div className={styles.folder_page_content_wrapper}>
        <div className={styles.folder_filter_wrapper}>
          <FolderFilterBox folderData={folderData} />
          <AddFolderButton />
        </div>
        <div className={styles.folder_title_box}>
          <h1 className={styles.folder_title}>유용한 글</h1>
          <LinkFuncButtonBox />
        </div>
        <LinkList linkData={linkData} />
      </div>
    </div>
  );
}

export default FolderPageMain;
