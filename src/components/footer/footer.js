import facebookImg from "../../img/facebook.svg";
import twitterImg from "../../img/twitter.svg";
import youtubeImg from "../../img/youtube.svg";
import instagramImg from "../../img/instagram.svg";

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
            <img src={facebookImg} alt="snsLinkImg" />
          </a>
        </li>
        <li className="footerContainer__sns--hideMaker">
          <a
            className="footerContainer__sns--twitter"
            href="https://twitter.com/"
          >
            <img src={twitterImg} alt="snsLinkImg" />
          </a>
        </li>
        <li className="footerContainer__sns--hideMaker">
          <a
            className="footerContainer__sns--youtube"
            href="https://www.youtube.com/"
          >
            <img src={youtubeImg} alt="snsLinkImg" />
          </a>
        </li>
        <li className="footerContainer__sns--hideMaker">
          <a
            className="footerContainer__sns--instagram"
            href="https://www.instagram.com/"
          >
            <img src={instagramImg} alt="snsLinkImg" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
