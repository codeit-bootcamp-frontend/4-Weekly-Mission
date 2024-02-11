import "./Footer.css";

const TEXT = {
  codeit: "©codeit - 2023",
  privacyPolicy: "Privacy Policy",
  faq: "FAQ",
  개인정보처리방침: "/privacy",
  FAQ: "/faq",
};

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-items">
        <span className="Footer-copyright">{TEXT.codeit}</span>
        <div className="Footer-links">
          <a className="Footer-link" href={TEXT.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </a>
          <a className="Footer-link" href={TEXT.FAQ}>
            {TEXT.faq}
          </a>
        </div>
        <div className="Footer-sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="Images/facebook.svg" alt="facebook 로고" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="Images/twitter.svg" alt="twitter 로고" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="Images/youtube.svg" alt="youtube 로고" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="Images/instagram.svg" alt="instagram 로고" />
          </a>
        </div>
      </div>
    </footer>
  );
};
