import { socialImgSrc, socialUrl } from "./socialIconResource";
import "../css/footer/footer.css";

function Footer(){
  return (
    <footer>
      <div className="footer-content">
        <p className="copyright">©codeit - 2023</p>
        <div className="footer-menu">
          <a href="./privacy.html">Privacy Policy</a>
          <a href="./faq.html">FAQ</a>
        </div>
        <div className="social-logo">
          <a href={socialUrl.facebook}><img src={socialImgSrc.facebook} alt="페이스북" /></a>
          <a href={socialUrl.twitter}><img src={socialImgSrc.twitter}
              alt="트위터" /></a>
          <a href={socialUrl.youtube}><img src={socialImgSrc.youtube} alt="유투브" /></a>
          <a href={socialUrl.instagram}><img src={socialImgSrc.instagram}
              alt="인스타그램" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;