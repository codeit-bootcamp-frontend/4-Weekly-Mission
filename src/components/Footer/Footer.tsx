import { SNS_LIST, SITE_LIST } from '../../constant/constant';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.layout}>
      <p className={styles.copyright}>©codeit - 2023</p>
      <section className={styles.linkBox}>
        <nav className={styles.linkNav}>
          {SITE_LIST.map((site, index) => (
            <a className={styles.siteLink} key={index} href={site.path}>
              {site.title}
            </a>
          ))}
        </nav>
        <section className={styles.snsNav}>
          {SNS_LIST.map((sns, index) => (
            <a key={index} href={`https://${sns}.com`} target='_blank' rel='noreferrer noopener'>
              <img className={styles.snsImage} src={`assets/icons/${sns}-logo.svg`} alt={sns} />
            </a>
          ))}
        </section>
      </section>
    </footer>
  );
};

export default Footer;
