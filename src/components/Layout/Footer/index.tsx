/** @jsxImportSource @emotion/react */
import styles from "./styles";
import { NavLink } from "react-router-dom";
import {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
} from "./footerIcons/Icons";
import "../../../styles/common.css";

const Footer = () => {
  const icons = [
    { component: FacebookIcon, id: 0 },
    { component: TwitterIcon, id: 1 },
    { component: YoutubeIcon, id: 2 },
    { component: InstagramIcon, id: 3 },
  ];

  return (
    <div css={styles.div}>
      <section css={styles.p}>
        <p>@codeit - 2023</p>
      </section>

      <nav css={styles.aWrapper}>
        <NavLink to="/policy" css={styles.a}>
          Privacy Policy
        </NavLink>
        <NavLink to="/faq" css={styles.a}>
          FAQ
        </NavLink>
      </nav>

      <section css={styles.icons}>
        {icons.map((icon) => (
          <icon.component key={icon.id} />
        ))}
      </section>
    </div>
  );
};
export default Footer;
