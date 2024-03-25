import styles from './FolderInfo.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

const FolderInfo = ({ folderInfo }) => {
  const folderImage = folderInfo?.folder.owner.profileImageSource;
  const folderUsername = folderInfo?.folder.owner.name;
  const folderName = folderInfo?.folder.name;

  return (
    <div className={cn('folder-info')}>
      <div className={cn('folder-profile')}>
        <div className={cn('folder-user')}>
          <img className={cn('folder-image')} src={folderImage} alt="폴더의 프로필 이미지." />
          <p className={cn('folder-username')}>@{folderUsername}</p>
        </div>
        <h1 className={cn('folder-name')}>{folderName}</h1>
      </div>
    </div>
  );
};

export default FolderInfo;
