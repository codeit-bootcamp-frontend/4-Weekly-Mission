import styles from "./FooterSocialLinkBox.module.css";
function FooterSocialLinkBox() {
  return (
    <ul className={styles.social_icon_wrapper}>
      <li>
        <a href="https://www.facebook.com/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/facebook_icon.svg`}
          ></img>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/twitter_icon.svg`}
          />
        </a>
      </li>
      <li>
        <a href="https://youtube.com">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/youtube_icon.svg`}
          />
        </a>
      </li>
      <li>
        <a href="https://instagram.com">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/instagram_icon.svg`}
          />
        </a>
      </li>
    </ul>
  );
}

export default FooterSocialLinkBox;
