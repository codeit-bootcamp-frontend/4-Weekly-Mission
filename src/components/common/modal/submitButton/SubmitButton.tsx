import styles from './SubmitButton.module.css';

interface SubmitButtonProps {
  className: string;
  content?: string;
}

const SubmitButton = ({ className, content }: SubmitButtonProps) => (
  <button className={`${styles.button} ${styles[className]}`}>{content}</button>
);

export default SubmitButton;
