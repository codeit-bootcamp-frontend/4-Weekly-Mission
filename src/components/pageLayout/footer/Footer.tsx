import instagramLogo from "../../../assets/img/svg/instafram-logo.svg";
import youtubeLogo from "../../../assets/img/svg/youtube-logo.svg";
import twitterLogo from "../../../assets/img/svg/twitter-logo.svg";
import facebookLogo from "../../../assets/img/svg/facebook-logo.svg";
import { SharedLinkLogo } from "./SharedLinkLogo";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const FOOTER_LOGO_DATA = [
  {
    id: uuid(),
    href: "https://www.facebook.com/",
    target: "facebook",
    src: facebookLogo,
    alt: "facebook-logo",
  },
  {
    id: uuid(),
    href: "https://twitter.com/",
    target: "twitter",
    src: twitterLogo,
    alt: "twitter-logo",
  },
  {
    id: uuid(),
    href: "https://www.youtube.com/",
    target: "youtube",
    src: youtubeLogo,
    alt: "youtube-logo",
  },
  {
    id: uuid(),
    href: "https://www.instagram.com/",
    target: "instagram",
    src: instagramLogo,
    alt: "instafram-logo",
  },
];

function Footer({
  footerTarget,
}: {
  footerTarget: React.RefObject<HTMLDivElement>;
}) {
  return (
    <footer>
      <div ref={footerTarget} className={`${styles.footerBox} black-bg`}>
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
            {FOOTER_LOGO_DATA.map(({ id, href, target, src, alt }) => {
              return (
                <SharedLinkLogo
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
