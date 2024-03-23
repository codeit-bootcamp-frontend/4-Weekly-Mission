import { useEffect, useState } from 'react';
import { getUserInfo } from '../api/api';
import styles from '../css/Header.module.css';

interface Props {
  query: string,
}

function Header({ query }: Props) {
  const [folderData, setFolderData] = useState({
    name: '',
  });
  const [folderOwnerData, setFolderOwnerData] = useState({
    profileImageSource: '',
    name: '',
  });

  const getFolderData = async (path: string) => {
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