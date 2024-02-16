import instagramLogo from "../../assets/img/svg/instafram-logo.svg";
import youtubeLogo from "../../assets/img/svg/youtube-logo.svg";
import twitterLogo from "../../assets/img/svg/twitter-logo.svg";
import facebookLogo from "../../assets/img/svg/facebook-logo.svg";
import { FooterLogo } from "./FooterLogo";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const FOOTER_LOGO_DATA = [
  {
    id: 1,
    href: "https://www.facebook.com/",
    target: "facebook",
    src: facebookLogo,
    alt: "facebook-logo",
  },
  {
    id: 2,
    href: "https://twitter.com/",
    target: "twitter",
    src: twitterLogo,
    alt: "twitter-logo",
  },
  {
    id: 3,
    href: "https://www.youtube.com/",
    target: "youtube",
    src: youtubeLogo,
    alt: "youtube-logo",
  },
  {
    id: 4,
    href: "https://www.instagram.com/",
    target: "instagram",
    src: instagramLogo,
    alt: "instafram-logo",
  },
];

function Footer() {
  return (
    <footer>
      <div className={`${styles.footerBox} black-bg`}>
        <div className={styles.footerMain}>
          <span className={styles.codeitFont}>©codeit - 2023 </span>
          <span>
            <Link className={`${styles.privacyFont}`} to="/privacy">
              Privacy Policy
            </Link>
            <span className={styles.paddingSide}>
              <Link className={styles.privacyFont} to="/faq">
                FAQ
              </Link>
            </span>
          </span>
          <span className={styles.footerLogoBox}>
            {FOOTER_LOGO_DATA.map((item) => {
              const { id, href, target, src, alt } = item;
              return (
                <FooterLogo
                  key={id}
                  href={href}
                  target={target}
                  src={src}
                  alt={alt}
                />
              );
            })}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
