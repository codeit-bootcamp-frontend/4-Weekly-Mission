import GoogleBackgroundImg from '../../assets/google-background.svg';
import GoogleImg from '../../assets/google.webp';
import KaKaoImg from '../../assets/kakao.svg';
import KaKaoBackgroundImg from '../../assets/kakao-background.svg';

const GOOGLE_LOGIN_URL = 'https://accounts.google.com/v3/sign/';
const KAKAO_LOGIN_URL = 'https://accounts.kakao.com/login/';

function SocialLogin() {
  return (
    <div className="sign__sns">
      <div className="sign__sns--text">소셜 로그인</div>
      <ul className="sign__sns__box">
        <li className="sign__sns--img">
          <a href={GOOGLE_LOGIN_URL}>
            <img src={GoogleBackgroundImg} alt="구글 배경 이미지" />
            <img className="sign__sns--google" src={GoogleImg} alt="구글 이미지" />
          </a>
        </li>
        <li className="sign__sns--img">
          <a href={KAKAO_LOGIN_URL}>
            <img className="sign__sns--kakao" src={KaKaoImg} alt="카카오 이미지" />
            <img src={KaKaoBackgroundImg} alt="카카오 배경 이미지" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLogin;
