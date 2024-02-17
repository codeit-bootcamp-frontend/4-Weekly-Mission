import { useEffect, useState } from 'react';
import { getUserInfo } from '../api/api';
import styles from '../css/LinkList.module.css';
import formatDate from '../utils/formatDate';
import diffTime from '../utils/diffTime';

function GetCard({item}) {
  return (
    <a href={item.url} target='_blank' rel='noreferrer'>
    <div className={styles.card} key={item.id}>
      <div className={styles.previewImg} style={{ backgroundImage: `url(${item.imageSource})`}} />
      <div className={styles.linkContent}>
        <p className={styles.updateTime}>{diffTime(item.createdAt)}</p>
        <p className={styles.linkDescription}>{item.description}</p>
        <p className={styles.linkCreatedDate}>{formatDate(item.createdAt)}</p>
      </div>
    </div>
    </a>
  )
}

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
            <GetCard item={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default LinkList;