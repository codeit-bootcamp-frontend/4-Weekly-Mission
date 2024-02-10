import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer mobile">
        <div className="column">
          <div className="footerlinks">
            <a href="/privacy" className="footerlink">
              Private Policy
            </a>
            <a href="/faq" className="footerlink">
              FAQ
            </a>
          </div>
          <div className="copyright">©codeit - 2023</div>
        </div>
        <span className="social">f t y g</span>
      </div>

      <div className="footer not-mobile">
        <span className="copyright">©codeit - 2023</span>
        <span className="footerlinks">
          <a href="/privacy" className="footerlink">
            Private Policy
          </a>
          <a href="/faq" className="footerlink">
            FAQ
          </a>
        </span>
        <span className="social">
          <a href="facebook.com">
            <img src="images/facebook.svg" alt="facebook"></img>
          </a>
          <a href="twitter.com">
            <img src="images/twitter.svg" alt="twitter"></img>
          </a>
          <a href="youtube.com">
            <img src="images/youtube.svg" alt="youtube"></img>
          </a>
          <a href="instagram.com">
            <img src="images/instagram.svg" alt="instagram"></img>
          </a>
        </span>
      </div>
    </footer>
  );
}
