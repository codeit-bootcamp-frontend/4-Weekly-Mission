import { Link } from 'react-router-dom';
import facebookLogo from '../../../assets/common/facebook.svg';
import twitterLogo from '../../../assets/common/twitter.svg';
import youtubeLogo from '../../../assets/common/youtube.svg';
import instagramLogo from '../../../assets/common/instagram.svg';

const Sns = () => {
  return (
    <div className="sns">
      <Link to="https://www.facebook.com/">
        <img src={facebookLogo} alt="facebook 홈페이지로 연결된 facebook 로고" />
      </Link>
      <Link to="https://twitter.com/">
        <img src={twitterLogo} alt="twitter 홈페이지로 연결된 twitter 로고" />
      </Link>
      <Link to="https://www.youtube.com/">
        <img src={youtubeLogo} alt="youtube 홈페이지로 연결된 youtube 로고" />
      </Link>
      <Link to="https://www.instagram.com/">
        <img src={instagramLogo} alt="instagram 홈페이지로 연결된 instagram 로고" />
      </Link>
    </div>
  );
};
export default Sns;
