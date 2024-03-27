import styles from './ShareBtn.module.css';

interface ShareBtnProps {
  name?: string;
  imgUrl?: string;
  backgroundColor?: string;
}

const ShareBtn = ({ name, imgUrl, backgroundColor = '' }: ShareBtnProps) => (
  <div className={styles.btnShare}>
    <div className={`${styles.icon} ${backgroundColor ? styles[backgroundColor] : ''}`}>
      <img src={imgUrl} alt={`${name} 로고`} className={styles.img} />
    </div>
    <span className={styles.name}>{name}</span>
  </div>
);

export default ShareBtn;
