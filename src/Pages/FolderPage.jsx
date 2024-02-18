import { useState } from "react";
import LinkAdd from "../components/LinkAdd";
import LinkList from "../components/LinkList";
import SearchBar from "../components/SearchBar";
import styles from "./FolderPage.module.css";
import FolderList from "../components/FolderList";

function FolderPage() {
  const [haveLinks, setHaveLinks] = useState(false);

  return (
    <>
      <LinkAdd />
      <div className={styles.content}>
          <SearchBar />
          <FolderList />
        {!haveLinks ? <p className={styles.noLinks}>저장된 링크가 없습니다.</p> : <LinkList />}
      </div>
    </>
  )
}

export default FolderPage;