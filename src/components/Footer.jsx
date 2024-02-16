import '../styles/Footer.css';
import SnsItem from './SnsItem';

const SNS_ITEMS = [
  {
    name: 'facebook',
    address: 'https://www.facebook.com/',
  },
  {
    name: 'twitter',
    address: 'https://twitter.com/',
  },
  {
    name: 'youtube',
    address: 'https://www.youtube.com/',
  },
  {
    name: 'instagram',
    address: 'https://www.instagram.com/',
  },
];

const LINK_ITEMS = [
  {
    name: 'Privacy Policy',
    address: '/privacy',
  },
  {
    name: 'FAQ',
    address: '/faq',
  },
];

function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer-group">
        <span className="copyright">©codeit - 2023</span>
        <ul className="link-list">
          {LINK_ITEMS.map(item => (
            <SnsItem key={item.name} name={item.name} address={item.address} />
          ))}
        </ul>
        <ul className="sns-list">
          {SNS_ITEMS.map(item => (
            <SnsItem key={item.name} name={item.name} address={item.address} imgSrc={item.imgSrc} />
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
