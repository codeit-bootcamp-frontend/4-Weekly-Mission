import styles from './FolderNav.module.css';
import NavLoginButton from 'components/SharedPage/header/NavLoginButton/NavLoginButton';
import { useFetch } from '../../../../hooks/useFetch';

function FolderNav({ userDataUrl }) {
  const { data: userDataObject } = useFetch(userDataUrl);
  const userData = userDataObject?.data['0'];

  return (
    <div className={styles['nav-wrapper']}>
      <div className={styles['nav-inside-wrapper']}>
        <a href='/'>
          <img
            className={styles['header-logo']}
            src={`${process.env.PUBLIC_URL}/assets/images/nav_logo.svg`}
            alt='Linkbrary_logo'
          />
        </a>
        <div className={styles['profile-wrapper']}>
          {!userData?.email ? (
            <NavLoginButton />
          ) : (
            <>
              <img
                src={userData?.image_source}
                alt='user_profile_image'
                className={styles['nav-profile-image']}
              />
              <p className={styles['profile-email']}>{userData.email}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FolderNav;
