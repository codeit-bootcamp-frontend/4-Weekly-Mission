import LinkArea from '../components/LinkArea';
import SnsIconArea from '../components/SnsIconArea';
import './FooterArea.css';

const FooterArea = () => {
  return (
    <div className="footer_area">
      <div className="corp_area">
        <LinkArea></LinkArea>
        <p className="copyright">©codeit - 2023</p>
      </div>
      <SnsIconArea></SnsIconArea>
    </div>
  );
};

export default FooterArea;
