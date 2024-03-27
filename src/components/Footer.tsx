import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-link">
          <a href="privacy.html">Privacy Policy</a>
          <a href="faq.html">FAQ</a>
        </div>
        <div className="footer-sns">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener">
            <img src="img/facebook.svg" alt="facebook 연결 로고" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer noopener">
            <img src="img/twitter.svg" alt="twitter 연결 로고" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer noopener">
            <img src="img/youtube.svg" alt="youtube 연결 로고" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">
            <img src="img/instagram.svg" alt="instagram 연결 로고" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
