import styles from './DeleteButton.module.css';
import { childrenProps } from '../ModalWrapper/ModalWrapper';
export default function DeleteModalButton({ children }: childrenProps) {
  return <button className={styles['modal-button']}>{children}</button>;
}
