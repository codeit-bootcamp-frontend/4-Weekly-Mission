import styles from './Profile.module.css';
import { useFetch } from '../../../../hooks/useFetch';

const folderUrl = 'https://bootcamp-api.codeit.kr/api/sample/folder';

function Profile() {
  const { data: folderData } = useFetch(folderUrl);

  return (
    <div className={styles['profile-wrapper']}>
      <div className={styles['profile-inside-wrapper']}>
        <div className={styles['profile-name-wrapper']}>
          <img
            className={styles['profile-avatar-image']}
            src={folderData?.folder.owner.profileImageSource}
            alt='profile_avatar_image'
          />
          <div className={styles['profile-name']}>
            {folderData?.folder.owner.name}
          </div>
        </div>
        <p className={styles['folder-name']}>{folderData?.folder.name}</p>
      </div>
    </div>
  );
}

export default Profile;
