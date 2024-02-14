import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-item">
        <span className="Footer-copyright">©codeit - 2023</span>
        <div className="Footer-links">
          <a className="Footer-link" href="/privacy">
            Privacy Policy
          </a>
          <a className="Footer-link" href="/faq">
            FAQ
          </a>
        </div>
        <div className="Footer-sns">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/facebook.svg" alt="facebook 홈페이지로 연결된 facebook 로고" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/twitter.svg" alt="twitter 홈페이지로 연결된 twitter 로고" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/youtube.svg" alt="youtube 홈페이지로 연결된 youtube 로고" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/instagram.svg" alt="instagram 홈페이지로 연결된 instagram 로고" />
          </a>
        </div>
      </div>
    </footer>
  );
};
