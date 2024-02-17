import { useEffect, useState } from 'react';
import { getUserInfo } from '../api/api';
import LinkCard from './LinkCard';
import styles from '../css/LinkList.module.css';

function LinkList() {
  const [folderData, setFolderData] = useState([]);

  const getFolderData = async (path) => {
    const result = await getUserInfo(path);
    
    if (!result) return;

    setFolderData(result.folder.links);
  }

  useEffect(() => {
    getFolderData('folder');
  }, [])

  return (
    <div className={styles.content}>
      <form>
        <div className={styles.searchIcon}></div>
        <input name="search" placeholder='링크를 검색해 보세요.' />
      </form>
      <div className={styles.items}>
        {folderData.map((item) => {
          return (
            <LinkCard item={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default LinkList;