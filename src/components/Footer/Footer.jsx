import { SNS_LIST } from '../../constant/constant';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.layout}>
      <p className={styles.copyright}>©codeit - 2023</p>
      <section className={styles.linkBox}>
        <nav className={styles.linkNav}>
          <a className={styles.siteLink} href='/'>
            Privacy Policy
          </a>
          <a className={styles.siteLink} href='/'>
            FAQ
          </a>
        </nav>
        <section className={styles.snsNav}>
          {SNS_LIST.map(sns => (
            <a key={sns} href={`https://${sns}.com`} target='_blank' rel='noreferrer noopener'>
              <img className={styles.snsImage} src={`assets/icons/${sns}-logo.svg`} alt={sns} />
            </a>
          ))}
        </section>
      </section>
    </footer>
  );
};

export default Footer;
