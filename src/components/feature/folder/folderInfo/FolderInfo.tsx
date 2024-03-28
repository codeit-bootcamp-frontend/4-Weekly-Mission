import styles from './FolderInfo.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

type FolderInfoType = {
  profileImage: string;
  ownerName: string;
  folderName: string;
};

const cx = classNames.bind(styles);

const FolderInfo = ({ profileImage, ownerName, folderName }: FolderInfoType) => {
  return (
    <div className={cx('container')}>
      <div className={cx('profile')}>
        {profileImage ? (
          <Image fill src={profileImage} alt="폴더 소유자 프로필 이미지" sizes="60px" />
        ) : null}
      </div>
      <span className={cx('owner')}>{ownerName}</span>
      <h2 className={cx('folder')}>{folderName}</h2>
    </div>
  );
};

export default FolderInfo;
