import facebook_icon from "../../image/facebook.svg";
import twitter_icon from "../../image/twitter.svg";
import youtube_icon from "../../image/youtube.svg";
import instagram_icon from "../../image/instagram.svg";
import styles from "../../css/FooterSocialLinkBox.module.css";
function FooterSocialLinkBox() {
  return (
    <ul className={styles.social_icon_wrapper}>
      <li>
        <a href="https://www.facebook.com/">
          <img src={facebook_icon}></img>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <img src={twitter_icon} />
        </a>
      </li>
      <li>
        <a href="https://youtube.com">
          <img src={youtube_icon} />
        </a>
      </li>
      <li>
        <a href="https://instagram.com">
          <img src={instagram_icon} />
        </a>
      </li>
    </ul>
  );
}

export default FooterSocialLinkBox;
