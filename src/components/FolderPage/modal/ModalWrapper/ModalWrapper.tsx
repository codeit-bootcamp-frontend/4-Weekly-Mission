import { ReactNode } from 'react';
import styles from './ModalWrapper.module.css';

export interface childrenProps {
  children: ReactNode;
}

export default function ModalWrapper({ children }: childrenProps) {
  return <div className={styles['modal-wrapper']}>{children}</div>;
}
