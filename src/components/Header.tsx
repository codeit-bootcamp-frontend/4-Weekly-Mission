import { useEffect, useState } from 'react';
import { getSampleFolderLinks } from '../api/api';
import styles from '../css/Header.module.css';

function Header() {
  const [folderData, setFolderData] = useState({
    name: '',
  });
  const [folderOwnerData, setFolderOwnerData] = useState({
    profileImageSource: '',
    name: '',
  });

  const getFolderData = async () => {
    const { folder } = await getSampleFolderLinks();
    
    if (!folder) return;

    setFolderData(folder);
    setFolderOwnerData(folder.owner);
  }

  useEffect(() => {
    getFolderData();
  }, [])

  return (
    <header className={styles.headerItems}>
      <img src={folderOwnerData.profileImageSource} alt="userProfile" />
      <div className={styles.username}>{folderOwnerData.name}</div>
      <div className={styles.folderName}>{folderData.name}</div>
    </header>
  )
}

export default Header;