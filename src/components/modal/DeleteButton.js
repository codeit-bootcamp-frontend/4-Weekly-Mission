import styles from './DeleteButton.module.css';

export default function DeleteModalButton({ children }) {
  return <button className={styles['modal-button']}>{children}</button>;
}
