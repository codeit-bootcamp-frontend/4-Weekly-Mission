import React, { useState, useEffect } from 'react';
import '../style/nav.css';
import fetchFolderInfo from '../utils/fetchFolderInfo';

function Nav() {
  const [folderInfo, setFolderInfo] = useState({
    ownerName: '',
    folderName: '',
    profileImage: '',
  });

  useEffect(() => {
    fetchFolderInfo(folderInfo, setFolderInfo);
  }, [folderInfo]);

  return (
    <nav className="nav">
      <div className="nav-item">
        <div className="nav-icon">
          <img src={folderInfo.profileImage} alt={folderInfo.ownerName} />
        </div>
        <p className="owner-name">@{folderInfo.ownerName}</p>
        <p className="folder-name">{folderInfo.folderName}</p>
      </div>
    </nav>
  );
}

export default Nav;
