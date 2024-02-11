import './Footer.css'
import facebookLogo from '../assets/facebook.svg';
import twitterkLogo from '../assets/twitter.svg';
import youtubeLogo from '../assets/youtube.svg';
import instagramLogo from '../assets/instagram.svg';

const Footer = () => {
  return (
  <footer className='container-footer'>
    <div className='footer_ly'>
      <div className='footer'>
        <span className='codeit social-logo_text'>©codeit - 2023</span>
        <div className='policy policy_ly'>
          <span className='social-logo_text'>Privacy Policy</span>
          <span className='social-logo_text'>FAQ</span>
        </div>
        <div className='social-logo social-logo_ly'>
          <a href="https://www.facebook.com/" className="social-logo_hypl">
            <img src={facebookLogo} alt="facebook 홈페이지로 연결된 facebook 로고" />
          </a>
          <a href="https://twitter.com/" className="social-logo_hypl">
            <img src={twitterkLogo} alt="twitter 홈페이지로 연결된 twitter 로고" />
          </a>
          <a href="https://www.youtube.com/" className="social-logo_hypl">
            <img src={youtubeLogo} alt="youtube 홈페이지로 연결된 youtube 로고" />
          </a>
          <a href="https://www.instagram.com/" className="social-logo_hypl">
            <img src={instagramLogo} alt="instagram 홈페이지로 연결된 instagram 로고" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;