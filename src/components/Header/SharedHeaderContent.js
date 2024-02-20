import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './SharedHeaderContent.module.css';
import { getFoldersInfo } from '../../services/api';
import ErrorMessage from '../Common/ErrorMessage';

// 폴더 정보 출력
function SharedHeaderContent() {
  // 폴더 정보 가져오기
  const [folderInfo, setFolderInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoadFolder = async () => {
    try {
      const result = await getFoldersInfo();
      setFolderInfo(result);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    handleLoadFolder();
  }, []);

  const ownerProfileImg = folderInfo?.folder.owner.profileImageSource || '';
  const ownerName = folderInfo?.folder.owner.name ? `@${folderInfo.folder.owner.name}` : '';
  const folderName = folderInfo?.folder.name || '';

  const contentClasses = classNames(styles['header-content']);
  const contentContainerClasses = classNames(styles['header-content-container']);
  const userClasses = classNames(styles['shared-user'], 'flex-col');
  const userAvatarClasses = classNames(styles['shared-user-avatar']);
  const userNameClasses = classNames(styles['shared-user-name']);
  const folderNameClasses = classNames(styles['shared-folder-name'], 'text-center');

  return (
    <div className={contentClasses}>
      <div className={contentContainerClasses}>
        {folderInfo && (
          <div>
            <div className={userClasses}>
              <img className={userAvatarClasses} src={ownerProfileImg} alt="ownerProfileImg" />
              <p className={userNameClasses}>{ownerName}</p>
            </div>
            <p className={folderNameClasses}>{folderName}</p>
          </div>
        )}
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    </div>
  );
}

export default SharedHeaderContent;
