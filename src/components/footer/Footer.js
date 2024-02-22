import styles from "./Footer.module.css";
import FooterSocialLinkBox from "./FooterSocialLinkBox";
function Footer() {
  return (
    <div className={styles["footer-wrapper"]}>
      <div className={styles["footer-inside-wrapper"]}>
        <div className={styles["footer-copyright"]}>&copy;codeit - 2023</div>
        <div className={styles["footer-detail-wrapper"]}>
          <p className={styles["footer-policy"]}>privacy policy</p>
          <p className={styles["footer-faq"]}>faq</p>
        </div>
        <FooterSocialLinkBox />
      </div>
    </div>
  );
}

export default Footer;
