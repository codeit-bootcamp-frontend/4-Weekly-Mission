import { useEffect, useState } from "react";
import LinkAdd from "../components/LinkAdd";
import SearchBar from "../components/SearchBar";
import styles from "./FolderPage.module.css";
import FolderList from "../components/FolderList";
import { getLinkInfo } from "../api/api";

function FolderPage() {
  const [haveLinks, setHaveLinks] = useState(false);

  const getLinkData = async (path, id) => {
    const { data } = await getLinkInfo(path, id);
    
    if (!data) return;

    setHaveLinks(data.link);
  }

  useEffect(() => {
    getLinkData('links', 14);
  }, [])

  return (
    <>
      <LinkAdd />
      <div className={styles.content}>
          <SearchBar />
          <FolderList />
        {haveLinks ? (<p className={styles.noLinks}>저장된 링크가 없습니다.</p>) : (<p>{haveLinks}</p>)}
      </div>
    </>
  )
}

export default FolderPage;