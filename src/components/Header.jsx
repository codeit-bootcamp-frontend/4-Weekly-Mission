import { useEffect, useState } from 'react';
import { getUserInfo } from '../api/api';
import styles from '../css/Header.module.css';

function Header({ query }) {
  const [folderData, setFolderData] = useState({});
  const [folderOwnerData, setFolderOwnerData] = useState({});

  const getFolderData = async (path) => {
    const result = await getUserInfo(path);
    
    if (!result) return;

    setFolderData(result.folder);
    setFolderOwnerData(result.folder.owner);
  }

  useEffect(() => {
    getFolderData(query);
  }, [query])

  return (
    <header className={styles.headerItems}>
      <img src={folderOwnerData.profileImageSource} alt="userProfile" />
      <div className={styles.username}>{folderOwnerData.name}</div>
      <div className={styles.folderName}>{folderData.name}</div>
    </header>
  )
}

export default Header;