import FooterLink from './FooterLink';
import Sns from './Sns';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <footer>
      <S.Container>
        <div className="footer-box">
          <span className="copyright">©codeit - 2023</span>
          <FooterLink />
          <Sns />
        </div>
      </S.Container>
    </footer>
  );
};

export default Footer;
