import { MouseEvent, PropsWithChildren } from 'react';
import { exitBtnId, modalBackground } from '../../../../util/constants';
import styles from './Frame.module.css';
import { OnCloseModal } from '../../../../types/onCloseModal';

const Frame = ({ children, onCloseModal }: PropsWithChildren<OnCloseModal>) => {
  const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === modalBackground || e.currentTarget.id === exitBtnId) {
      () => onCloseModal;
    }
  };

  return (
    <div className={styles.background} onClick={handleCloseModal} id={modalBackground}>
      <div className={styles.modal}>
        {children}
        <button className={styles.exit} id={exitBtnId} />
      </div>
    </div>
  );
};

export default Frame;
