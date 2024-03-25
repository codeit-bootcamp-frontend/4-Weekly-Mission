import styles from './Title.module.css';

interface TitleProps {
  title: string;
  content?: string;
}

const Title = ({ title, content }: TitleProps) => (
  <header className={styles.titleArea}>
    <h1 className={styles.title}>{title}</h1>
    {content && <h2 className={styles.folderName}>{content}</h2>}
  </header>
);

export default Title;
