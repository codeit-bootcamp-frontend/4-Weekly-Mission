import FacebookIcon from '../../assets/footer-facebook.svg';
import TwitterIcon from '../../assets/footer-twitter.svg';
import YoutubeIcon from '../../assets/footer-youtube.svg';
import InstargramIcon from '../../assets/footer-instargram.svg';
import '../../styles/footer.css';
import { Link } from 'react-router-dom';

const footerLinkList = [
  {
    url: 'https://facebook.com/?locale=ko_KR',
    icon: FacebookIcon,
    text: '페이스북',
  },
  {
    url: 'https://twitter.com/?lang=ko',
    icon: TwitterIcon,
    text: '트위터',
  },
  {
    url: 'https://www.youtube.com',
    icon: YoutubeIcon,
    text: '유튜브',
  },
  {
    url: 'https://www.instagram.com',
    icon: InstargramIcon,
    text: '인스타그램',
  },
];

function Footer() {
  return (
    <footer className='footer'>
      <Link className='footer__logo' to='/'>
        ©codeit - 2023
      </Link>
      <div>
        <ul className='footer__nav'>
          <li>
            <Link className='footer__nav--text' to='/privacy'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className='footer__nav--text' href='/faq'>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className='footer_sns'>
        <ul className='footer__link'>
          {footerLinkList.map((list, idx) => {
            const { url, icon, text } = list;
            return (
              <li key={idx}>
                <a href={url} target='_blank' rel='noreferrer'>
                  <img src={icon} alt={`${text} 아이콘`} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
