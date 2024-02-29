import { Link } from 'react-router-dom';
import FacebookLogo from '../../../assets/common/facebook.svg';
import TwitterLogo from '../../../assets/common/twitter.svg';
import YoutubeLogo from '../../../assets/common/youtube.svg';
import InstagramLogo from '../../../assets/common/instagram.svg';

const Sns = () => {
  return (
    <div className="sns">
      <Link to="https://www.facebook.com/">
        <img src={FacebookLogo} alt="facebook 홈페이지로 연결된 facebook 로고" />
      </Link>
      <Link to="https://twitter.com/">
        <img src={TwitterLogo} alt="twitter 홈페이지로 연결된 twitter 로고" />
      </Link>
      <Link to="https://www.youtube.com/">
        <img src={YoutubeLogo} alt="youtube 홈페이지로 연결된 youtube 로고" />
      </Link>
      <Link to="https://www.instagram.com/">
        <img src={InstagramLogo} alt="instagram 홈페이지로 연결된 instagram 로고" />
      </Link>
    </div>
  );
};
export default Sns;
