import './Footer.css'
import facebookImg from '../assets/facebook.svg';
import twitterkImg from '../assets/twitter.svg';
import youtubeImg from '../assets/youtube.svg';
import instagramImg from '../assets/instagram.svg';

const Footer = () => {
  return (
  <div className='container-footer'>
    <div className='footer_ly'>
      <div className='footer'>
        <span className='codeit social-logo_text'>©codeit - 2023</span>
        <div className='policy policy_ly'>
          <span className='social-logo_text'>Privacy Policy</span>
          <span className='social-logo_text'>FAQ</span>
        </div>
        <div className='social-logo social-logo_ly'>
          <a href="https://www.facebook.com/" className="social-logo_hypl">
            <img src={facebookImg} alt="facebook 홈페이지로 연결된 facebook 로고" />
          </a>
          <a href="https://twitter.com/" className="social-logo_hypl">
            <img src={twitterkImg} alt="twitter 홈페이지로 연결된 twitter 로고" />
          </a>
          <a href="https://www.youtube.com/" className="social-logo_hypl">
            <img src={youtubeImg} alt="youtube 홈페이지로 연결된 youtube 로고" />
          </a>
          <a href="https://www.instagram.com/" className="social-logo_hypl">
            <img src={instagramImg} alt="instagram 홈페이지로 연결된 instagram 로고" />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer;