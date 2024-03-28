import styles from './ModalButton.module.css';
import { childrenProps } from '../ModalWrapper/ModalWrapper';
export default function ModalButton({ children } : childrenProps) {
  return <button className={styles['modal-button']}>{children}</button>;
}
