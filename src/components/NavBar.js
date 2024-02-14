import logoImg from '../images/logo.svg';
import '../css/NavBar.css';
import { getProfile } from '../api.js';
import { useEffect, useState } from 'react';

function NavBar() {
  const [noneProfile, setNoneProfile] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userProfileImgSrc, setUserProfileImgSrc] = useState('');

  const handleLoadProfile = async () => {
    let result;
    try {
      setNoneProfile(false);
      result = await getProfile();
    } catch (error) {
      setNoneProfile(true);
      return;
    }
    const { email, profileImageSource } = result;
    setUserEmail(email);
    setUserProfileImgSrc(profileImageSource);
  };
  useEffect(() => {
    handleLoadProfile();
  }, []);

  return (
    <nav>
      <div className="gnb">
        <a className="logo" href="/">
          <img className="button-logo" src={logoImg} alt="Linkbrary 로고" />
        </a>
        <a href="/src/components/SignIn.js">
          {!noneProfile && (
            <div className="profile">
              <img
                className="profile-img"
                src={userProfileImgSrc}
                alt="프로필 이미지"
              />
              <span className="profile-id">{userEmail}</span>
            </div>
          )}
        </a>
        {noneProfile && (
          <a className="login-button" href="/src/components/SignIn.js">
            로그인
          </a>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
