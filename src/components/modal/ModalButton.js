import styles from './ModalButton.module.css';

export default function ModalButton({ children }) {
  return <button className={styles['modal-button']}>{children}</button>;
}
