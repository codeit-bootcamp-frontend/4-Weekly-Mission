import { useCallback, useEffect, useState } from 'react';
import { getUserInfo, getLinkInfo } from '../api/api';
import LinkCard from './LinkCard';
import styles from '../css/LinkList.module.css';
import { useLocation } from "react-router-dom";

function LinkList({ query, id }) {
  const [folderData, setFolderData] = useState([]);
  const { pathname } = useLocation();

  const getLinkData = async (path, id) => {
    const { data } = await getLinkInfo(path ,id);
    
    if (!data) return;

    setFolderData(data);
  }

  const getFolderData = async (path) => {
    const { folder } = await getUserInfo(path);
    
    if (!folder) return;

    setFolderData(folder.links);
  }

  const handleLoad = useCallback((path, id) => {
    if (pathname === '/folder') {
      getLinkData(path, id);
      return;
    }
    if (pathname === '/shared') {
      getFolderData(path, id)
    }
  }, [pathname]
  )

  useEffect(() => {
    handleLoad(query, id);
  }, [query, id, handleLoad])

  return (
    <div className={styles.content}>
      <div className={styles.items}>
        {folderData.length !== 0 ? (folderData.map((item) => 
        <LinkCard item={item} key={item.id}/>))
        : <p className={styles.noLinks}>저장된 링크가 없습니다.</p>}
      </div>
    </div>
  )
}

export default LinkList;