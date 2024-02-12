import './Footer.css';
import facebook from '../../assets/images/akar-icons_facebook-fill.svg';
import twitter from '../../assets/images/akar-icons_twitter-fill.svg';
import youtube from '../../assets/images/akar-icons_youtube-fill.svg';
import instagram from '../../assets/images/ant-design_instagram-filled.svg';

function Footer() {
  const socialLinks = [
    { id: 1, src: facebook, alt: 'facebook' },
    { id: 2, src: twitter, alt: 'twitter' },
    { id: 3, src: youtube, alt: 'youtube' },
    { id: 4, src: instagram, alt: 'instagram' },
  ];

  return (
    <footer className="footer flex-row position-relative background-black width-full">
      <div className="copyright">©codeit - 2023</div>
      <div className="official-link flex-row">
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className="social-link flex-row">
        {socialLinks.map((link) => (
          <img key={link.id} className="social-link-icon" src={link.src} alt={link.alt} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
