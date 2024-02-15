import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="credit">
        <div className="copyright">©codeit - 2023</div>
        <div className="footer_links">
          <a className="privacy" href="/privacy">
            Privacy Policy
          </a>
          <a className="faq" href="/faq">
            FAQ
          </a>
        </div>
        <div className="icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="icon"
              src="image/logo/facebook.svg"
              alt="facebook"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="icon" src="image/logo/twitter.svg" alt="twitter" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="icon" src="image/logo/youtube.svg" alt="youtube" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="icon"
              src="image/logo/instagram.svg"
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
