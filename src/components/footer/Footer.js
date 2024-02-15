import styles from "./Footer.module.css";
import FooterSocialLinkBox from "./FooterSocialLinkBox";
function Footer() {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_inside_wrapper}>
        <div className={styles.footer_copyright}>&copy;codeit - 2023</div>
        <div className={styles.footer_detail_wrapper}>
          <p className={styles.footer_policy}>privacy policy</p>
          <p className={styles.footer_faq}>faq</p>
        </div>
        <FooterSocialLinkBox />
      </div>
    </div>
  );
}

export default Footer;
