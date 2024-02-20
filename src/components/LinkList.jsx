import { useEffect, useState } from 'react';
import { getUserInfo } from '../api/api';
import LinkCard from './LinkCard';
import styles from '../css/LinkList.module.css';

function LinkList({ query }) {
  const [folderData, setFolderData] = useState([]);

  const getFolderData = async (path) => {
    const result = await getUserInfo(path);
    
    if (!result) return;

    setFolderData(result.folder.links);
  }

  useEffect(() => {
    getFolderData(query);
  }, [query])

  return (
    <div className={styles.content}>
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