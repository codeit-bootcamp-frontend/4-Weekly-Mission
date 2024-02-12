import '../css/Header.css';
import { useEffect, useState } from 'react';
import { getUserInfo } from '../api';

function Header() {
  const [folderData, setFolderData] = useState({});
  const [folderOwnerData, setFolderOwnerData] = useState({});

  const getFolderData = async (path) => {
    const result = await getUserInfo(path);
    
    if (!result) return;

    setFolderData(result.folder);
    setFolderOwnerData(result.folder.owner);
  }

  useEffect(() => {
    getFolderData('folder');
  }, [])

  return (
    <header className='header-items'>
      <img src={folderOwnerData.profileImageSource} alt="userProfile" />
      <div className='username'>{folderOwnerData.name}</div>
      <div className='folder-name'>{folderData.name}</div>
    </header>
  )
}

export default Header;