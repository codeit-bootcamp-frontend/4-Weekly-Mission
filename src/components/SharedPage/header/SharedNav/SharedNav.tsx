import styles from './ShareNav.module.css';
import NavLoginButton from '../NavLoginButton/NavLoginButton';
import { useFetch } from '../../../../hooks/useFetch';
import { SharePageUserData } from 'types/SharePage/UserDataType';
const userDataUrl = 'https://bootcamp-api.codeit.kr/api/sample/user';

function SharedNav() {
  const { data: userData } = useFetch<SharePageUserData>(userDataUrl);

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
                src={userData?.profileImageSource}
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

export default SharedNav;
