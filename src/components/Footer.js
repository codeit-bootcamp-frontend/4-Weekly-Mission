import FacebookImg from "../img/facebook.svg";
import TwitterImg from "../img/twitter.svg";
import YoutubeImg from "../img/youtube.svg";
import InstagramImg from "../img/instagram.svg";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContainer__content">
        <div className="footerContainer__codeit">©codeit - 2023</div>
        <div className="footerContainer__links">
          <a className="footerContainer__links--Privacy" href="./privacy.html">
            Privacy Policy
          </a>
          <a className="footerContainer__links--FAQ" href="./faq.html">
            FAQ
          </a>
        </div>
      </div>
      <ul className="footerContainer__sns">
        <li className="footerContainer__sns--hideMaker">
          <a
            className="footerContainer__sns--facebook"
            href="https://www.facebook.com/"
          >
            <img src={FacebookImg} alt="snsLinkImg" />
          </a>
        </li>
        <li className="footerContainer__sns--hideMaker">
          <a
            className="footerContainer__sns--twitter"
            href="https://twitter.com/"
          >
            <img src={TwitterImg} alt="snsLinkImg" />
          </a>
        </li>
        <li className="footerContainer__sns--hideMaker">
          <a
            className="footerContainer__sns--youtube"
            href="https://www.youtube.com/"
          >
            <img src={YoutubeImg} alt="snsLinkImg" />
          </a>
        </li>
        <li className="footerContainer__sns--hideMaker">
          <a
            className="footerContainer__sns--instagram"
            href="https://www.instagram.com/"
          >
            <img src={InstagramImg} alt="snsLinkImg" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
