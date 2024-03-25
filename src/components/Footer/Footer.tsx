import { ROUTE } from "util/constant";
import "./Footer.css";
import { TEXT } from "./constant";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-items">
        <span className="Footer-copyright">{TEXT.codeit}</span>
        <div className="Footer-links">
          <a className="Footer-link" href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </a>
          <a className="Footer-link" href={ROUTE.FAQ}>
            {TEXT.faq}
          </a>
        </div>
        <div className="Footer-sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Facebook}
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="twitter 홈페이지로 연결된 twitter 로고" />
          </a>
          <a
            href="../../assets/youtube.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="youtube 홈페이지로 연결된 youtube 로고" />
          </a>
          <a
            href="../../assets/instagram.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Instagram}
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
