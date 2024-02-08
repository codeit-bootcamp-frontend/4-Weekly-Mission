import "./css/Footer.css";

const Footer = () => {
  const smallLogoStyle = {
    width: "18px",
    height: "18px",
  };
  const mediumLogoStyle = {
    width: "20px",
    height: "20px",
  };
  return (
    <footer>
      <div className="txt-copyright">©codeit - 2023</div>
      <div className="txt-CS">
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
      </div>
      <div className="icons-footer">
        <a href="https://www.facebook.com" target="_blank">
          <img
            alt="facebook logo"
            src="logos/facebook_logo.png"
            style={smallLogoStyle}
          />
        </a>
        <a href="https://www.twittwe.com" target="_blank">
          <img
            alt="twitter logo"
            src="logos/twitter_logo.png"
            style={mediumLogoStyle}
          />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <img
            alt="youtube logo"
            src="logos/youtube_logo.png"
            style={mediumLogoStyle}
          />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img
            alt="instagram logo"
            src="logos/instagram_logo.png"
            style={mediumLogoStyle}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
