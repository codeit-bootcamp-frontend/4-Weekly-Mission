import { exitBtnId, modalBackground } from '../../../../util/constants';
import styles from './Frame.module.css';

const Frame = ({ children, handleCloseModal }) => (
  <div className={styles.background} onClick={handleCloseModal} id={modalBackground}>
    <div className={styles.modal}>
      {children}
      <button className={styles.exit} id={exitBtnId} />
    </div>
  </div>
);

export default Frame;
