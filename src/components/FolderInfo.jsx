import '../styles/FolderInfo.css';
import { useEffect, useState } from 'react';
import { getFolder } from '../services/api';

const INIT_FOLDER_INFO = {
  name: '',
  owner: {
    name: '',
    profileImageSource: '',
  },
};

function FolderInfo() {
  const [folderInfo, setFolderInfo] = useState(INIT_FOLDER_INFO);

  const apiGetFolder = async () => {
    try {
      const { folder } = await getFolder();
      const { name, owner } = folder;
      setFolderInfo({ name, owner });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiGetFolder();
  }, []);
  return (
    <div id="folder-info">
      <div className="info-box">
        <div className="profile-img">
          <img src={folderInfo.owner.profileImageSource} alt="profile" />
        </div>
        <div className="user-name">
          <div>{folderInfo.owner.name}</div>
        </div>
        <div className="folder-name">
          <div>{folderInfo.name}</div>
        </div>
      </div>
    </div>
  );
}

export default FolderInfo;
