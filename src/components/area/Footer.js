import LinkArea from './LinkArea';
import SnsIconArea from './SnsIconArea';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer_area">
      <div className="corp_area">
        <LinkArea />
        <p className="copyright">©codeit - 2023</p>
      </div>
      <SnsIconArea />
    </div>
  );
};

export default Footer;
