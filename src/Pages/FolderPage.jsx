import LinkAdd from "../components/LinkAdd";
import SearchBar from "../components/SearchBar";
import styles from "./FolderPage.module.css";
import FolderList from "../components/FolderList";
import LinkList from "../components/LinkList";

function FolderPage() {
  //링크가 있는지 없는지 확인(구현 전)
  const haveLinks = false;

  return (
    <>
      <LinkAdd />
      <div className={styles.content}>
          <SearchBar />
          <FolderList />
        {!haveLinks ? (<p className={styles.noLinks}>저장된 링크가 없습니다.</p>) : (<LinkList />)}
      </div>
    </>
  )
}

export default FolderPage;