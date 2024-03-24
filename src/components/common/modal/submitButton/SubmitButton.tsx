import styles from './SubmitButton.module.css';

const SubmitButton = ({ className, content }: { className: string; content: string }) => (
  <button className={`${styles.button} ${styles[className]}`}>{content}</button>
);

export default SubmitButton;
