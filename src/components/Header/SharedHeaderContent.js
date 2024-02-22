import classNames from 'classnames';

import useFetch from 'hooks/useFetch';

import ErrorMessage from 'components/Common/ErrorMessage';
import styles from 'components/Header/SharedHeaderContent.module.css';

import { getSampleFolderApiUrl } from 'services/api';

// 폴더 정보 출력
function SharedHeaderContent() {
  const LOADING_MESSAGE = 'Loading...';

  // 폴더 정보 가져오기
  const url = getSampleFolderApiUrl();
  const { data, loading, error } = useFetch(url);

  const ownerProfileImg = data?.folder.owner.profileImageSource || '';
  const ownerName = data?.folder.owner.name ? `@${data.folder.owner.name}` : '';
  const folderName = data?.folder.name || '';

  const contentClasses = classNames(styles['header-content']);
  const contentContainerClasses = classNames('flex-col', 'align-center');
  const userClasses = classNames(styles['shared-user']);
  const userAvatarClasses = classNames(styles['shared-user-avatar']);
  const userNameClasses = classNames(styles['shared-user-name']);
  const folderNameClasses = classNames(styles['shared-folder-name'], 'text-center');

  return (
    <div className={contentClasses}>
      <div>
        {data && (
          <div className={contentContainerClasses}>
            <div className={userClasses}>
              <img className={userAvatarClasses} src={ownerProfileImg} alt="ownerProfileImg" />
              <p className={userNameClasses}>{ownerName}</p>
            </div>
            <p className={folderNameClasses}>{folderName}</p>
          </div>
        )}
        {loading && <ErrorMessage message={LOADING_MESSAGE} />}
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
}

export default SharedHeaderContent;
