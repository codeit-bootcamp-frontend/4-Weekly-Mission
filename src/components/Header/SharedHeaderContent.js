import { useState, useEffect } from 'react';
import './SharedHeaderContent.css';
import { getFolderInfo } from '../../services/api';

// 폴더 정보 출력
function SharedHeaderContent() {
  // 폴더 정보 가져오기
  const [folderInfo, setFolderInfo] = useState(null);

  const handleLoadFolder = async () => {
    try {
      const result = await getFolderInfo();
      setFolderInfo(result);
    } catch (error) {
      console.error(error);
      setFolderInfo(null);
    }
  };

  useEffect(() => {
    handleLoadFolder();
  }, []);

  const ownerProfileImg = folderInfo?.folder.owner.profileImageSource || '';
  const ownerName = folderInfo?.folder.owner.name ? '@' + folderInfo.folder.owner.name : '';
  const folderName = folderInfo?.folder.name || '';

  return (
    <div className="header-content">
      <div className="header-content-container">
        {folderInfo && (
          <div>
            <div className="shared-user flex-col">
              <img className="shared-user-avatar" src={ownerProfileImg} alt="ownerProfileImg"></img>
              <p className="shared-user-name">{ownerName}</p>
            </div>
            <p className="shared-folder-name text-center">{folderName}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SharedHeaderContent;
