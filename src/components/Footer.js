import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import instagram from '../images/instagram.svg';
import '../css/Footer.css';

function Footer() {
  return (
    <footer>
      <div class="footer-inner">
        <div class="company-info">codeit-2023</div>
        <div class="QnA-links">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </div>
        <div class="sns-links">
          <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'><img alt="facebook" src={facebook} /></a>
          <a href="https://twitter.com/" target='_blank' rel='noreferrer'><img alt="twitter" src={twitter} /></a>
          <a href="https://www.youtube.com/" target='_blank' rel='noreferrer'><img alt="youtube" src={youtube} /></a>
          <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'><img alt="instagram" src={instagram} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;