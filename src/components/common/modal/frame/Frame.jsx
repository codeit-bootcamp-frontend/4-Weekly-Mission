import { Outlet } from 'react-router-dom';
import { exitBtnId, modalBackground } from '../../../../util/constants';
import styles from './Frame.module.css';

const Frame = ({ handleCloseModal }) => (
  <div className={styles.background} onClick={handleCloseModal} id={modalBackground}>
    <div className={styles.modal}>
      <Outlet />
      <button className={styles.exit} id={exitBtnId} />
    </div>
  </div>
);

export default Frame;
