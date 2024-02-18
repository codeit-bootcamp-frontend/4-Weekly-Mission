import "../../iconFont.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__items">
        <span className="Footer__copyright">@codeit - 2023</span>
        <div className="Footer__links">
          <a className="Footer__links__item" href="/privacy">
            Privacy Policy
          </a>
          <a className="Footer__links__item" href="/faq">
            FAQ
          </a>
        </div>
        <div className="Footer__sns">
          <a
            className="footer__sns__item"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="icon-sns-facebook"
              aria-label="페이스북-새 창 이동"
            ></i>
          </a>
          <a
            className="Footer__sns__item"
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon-sns-twitter" aria-label="트위터-새 창 이동"></i>
          </a>
          <a
            className="Footer__sns__item"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon-sns-youtube" aria-label="유튜브-새 창 이동"></i>
          </a>
          <a
            className="Footer__sns__item"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="icon-sns-instagram"
              aria-label="인스타그램-새 창 이동"
            ></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
