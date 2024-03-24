import styles from "./Title.module.css";

const Title = ({ title, content }) => (
  <header className={styles.titleArea}>
    <h1 className={styles.title}>{title}</h1>
    {content && <h2 className={styles.folderName}>{content}</h2>}
  </header>
);

export default Title;
