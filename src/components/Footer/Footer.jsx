import facebook from "../../assets/images/akar-icons_facebook-fill.png";
import twitter from "../../assets/images/akar-icons_twitter-fill.png";
import youtube from "../../assets/images/akar-icons_youtube-fill.png";
import instagram from "../../assets/images/ant-design_instagram-filled.png";
import "./Footer.css";

const facebookLink = "https://www.facebook.com/";
const twitterLink = "https://twitter.com/";
const youtubeLink = "https://www.youtube.com/";
const instagramLink = "https://www.instagram.com/";

const handleClickImg = (link) => {
  window.open(link, "_blank");
};

function Footer({ className }) {
  return (
    <footer className={`Footer ${className}`}>
      <div className="container">
        <p className="Footer-company">©codeit - 2023</p>
        <div className="Footer-link flex items-center">
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </div>
        <div className="Footer-imgs flex items-center">
          <img
            src={facebook}
            alt="facebook"
            onClick={() => handleClickImg(facebookLink)}
          />
          <img
            src={twitter}
            alt="twitter"
            onClick={() => handleClickImg(twitterLink)}
          />
          <img
            src={youtube}
            alt="youtube"
            onClick={() => handleClickImg(youtubeLink)}
          />
          <img
            src={instagram}
            alt="instagram"
            onClick={() => handleClickImg(instagramLink)}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
