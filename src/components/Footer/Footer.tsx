import facebookIcon from "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter.svg";
import youtubeIcon from "../../assets/youtube.svg";
import instagramIcon from "../../assets/instagram.svg";
import css from "./Footer.module.scss";

function Footer() {
  const SNS_LIST = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      src: facebookIcon,
    },
    {
      name: "Twitter",
      href: "https://www.twitter.com/",
      src: twitterIcon,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/",
      src: youtubeIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      src: instagramIcon,
    },
  ];

  return (
    <div className={css.Footer}>
      <p className={css.copyright}>©codeit - 2023</p>
      <div className={css.footerLink}>
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className={css.sns}>
        {SNS_LIST.map(({ name, href, src }) => (
          <a key={name} href={href}>
            <img src={src} alt={name} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
