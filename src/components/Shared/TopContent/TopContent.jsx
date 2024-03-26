import React, { useState, useEffect } from 'react';
import styles from './TopContent.module.scss';

function TopContent() {
  const [folderInfo, setFolderInfo] = useState({
    ownerName: '',
    folderName: '',
    profileImage: '',
  });

  useEffect(() => {
    const fetchFolderInfo = async () => {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/sample/folder'
        );
        if (!response.ok) {
          throw new Error('response 전달 실패');
        }
        const data = await response.json();
        setFolderInfo({
          ownerName: data.folder.owner.name,
          folderName: data.folder.name,
          profileImage: data.folder.owner.profileImageSource,
        });
      } catch (error) {
        console.error('에러 발생:', error);
        alert(error);
      }
    };
    fetchFolderInfo();
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
        <img
          className={styles.navIcon}
          src={folderInfo.profileImage}
          alt={folderInfo.ownerName}
        />
        <p className={styles.ownerName}>@{folderInfo.ownerName}</p>
        <p className={styles.folderName}>{folderInfo.folderName}</p>
      </div>
    </nav>
  );
}

export default TopContent;
