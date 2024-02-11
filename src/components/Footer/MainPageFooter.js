import "./MainPageFooter.css";

export default function MainPageFooter() {
  return (
    <footer className="mainPage-footer">
      <span>©codeit - 2023</span>
      <div className="footer-policy">
        <a className="policy-link" href="/privacy.html">
          Privacy Policy
        </a>
        <a className="policy-link" href="/faq.html">
          FAQ
        </a>
      </div>
      <div className="footer-sns">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="sns-logo"
            src="images/facebook.svg"
            alt="facebook-logo"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">
          <img
            className="sns-logo"
            src="images/twitter.svg"
            alt="twitter-logo"
          />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer noopener">
          <img
            className="sns-logo"
            src="images/youtube.svg"
            alt="youtube-logo"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="sns-logo"
            src="images/instagram.svg"
            alt="instagram-logo"
          />
        </a>
      </div>
    </footer>
  );
}
