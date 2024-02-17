import { useEffect, useState } from 'react';
import { getUserInfo } from '../api/api';
import LinkCard from './LinkCard';
import SearchBar from './SearchBar';
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
      <SearchBar />
      <div className={styles.items}>
        {folderData.map((item) => {
          return (
            <LinkCard item={item} key={item.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default LinkList;