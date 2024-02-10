import facebookIcon from '../assets/facebook.png';
import instargramIcon from '../assets/instagram.png';
import youtubeIcon from '../assets/youtube.png';
import twitterIcon from '../assets/twitter.png';
import '../style/Footer.css';

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='company'>©codeit - 2023</div>
          <div className='footer-menu'>
            <a id='policy' href='/Privacy'>
              Privacy Policy
            </a>
            <a href='/faq'>FAQ</a>
          </div>
          <div className='footer-icon'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={facebookIcon} alt='facebook' />
            </a>
            <a
              href='https://twitter.com/?lang=ko'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={twitterIcon} alt='twitter' />
            </a>
            <a
              href='https://www.youtube.com/?hl=ko'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={youtubeIcon} alt='youtube' />
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={instargramIcon} alt='instagram' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
