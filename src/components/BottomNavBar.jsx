import styles from "./BottomNavBar.module.css";
import Icon from "./Icon";
import facebooklogo from "../images/facebook.svg";
import twitterlogo from "../images/twitter.svg";
import youtubelogo from "../images/youtube.svg";
import instagramlogo from "../images/instagram.svg";

const MEDIA_LINK = [
  {
    type: "facebook",
    link: "https://www.facebook.com/",
    logo: facebooklogo,
  },
  {
    type: "twitter",
    link: "https://twitter.com/",
    logo: twitterlogo,
  },
  {
    type: "youtube",
    link: "https://www.youtube.com/",
    logo: youtubelogo,
  },
  {
    type: "instgram",
    link: "https://www.instagram.com/",
    logo: instagramlogo,
  },
];

function BottomNavBar() {
  return (
    <footer>
      <div class={styles.container}>
        <div class={styles.left}>©codeit - 2023</div>
        <div class={styles.center}>
          <span class={styles.centerText}> Privacy Policy </span>
          <span class={styles.centerText}> FAQ </span>
        </div>
        <div class={styles.right}>
          {MEDIA_LINK.map((media) => (
            <Icon mediaType={media} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default BottomNavBar;
