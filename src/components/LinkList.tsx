import { useCallback, useEffect, useState } from 'react';
import { getFolderLinksData, getSampleFolderLinks } from '../api/api';
import LinkCard from './LinkCard';
import styles from '../css/LinkList.module.css';
import { useLocation } from "react-router-dom";

interface Props {
  id: number|string,
}

function LinkList({ id }: Props) {
  const [folderData, setFolderData] = useState([]);
  const { pathname } = useLocation();

  const getLinkData = async (id: string|number) => {
    const { data } = await getFolderLinksData(id);
    
    if (!data) return;

    setFolderData(data);
  }

  const getFolderData = async () => {
    const { folder } = await getSampleFolderLinks();
    
    if (!folder) return;

    setFolderData(folder.links);
  }

  const handleLoad = useCallback((id: number|string) => {
    if (pathname === '/folder') {
      getLinkData(id);
      return;
    }
    if (pathname === '/shared') {
      getFolderData()
    }
  }, [pathname]
  )

  useEffect(() => {
    handleLoad(id);
  }, [id, handleLoad])

  return (
    <div className={styles.content}>
      <div className={styles.items}>
        {folderData.length !== 0 ? (folderData.map((item: any) => 
        <LinkCard item={item} key={item.id}/>))
        : <p className={styles.noLinks}>저장된 링크가 없습니다.</p>}
      </div>
    </div>
  )
}

export default LinkList;