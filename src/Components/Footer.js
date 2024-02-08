import "./css/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="txt_copyright">©codeit - 2023</div>
      <div className="txt_CS">
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
      </div>
      <div className="icons_footer">
        <a href="https://www.facebook.com" target="_blank">
          <img
            alt="facebook logo"
            src="logos/facebook_logo.png"
            style={{ width: "18px", height: "18px" }}
          />
        </a>
        <a href="https://www.twittwe.com" target="_blank">
          <img
            alt="twitter logo"
            src="logos/twitter_logo.png"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <img
            alt="youtube logo"
            src="logos/youtube_logo.png"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img
            alt="instagram logo"
            src="logos/instagram_logo.png"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
