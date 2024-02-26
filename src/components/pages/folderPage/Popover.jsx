import { modalTypes } from '../../../util/constants';
import styles from './Popover.module.css';

const Popover = ({ handlePopoverClick, handleModalBtnClick, handleSelectedLink }) => {
  const onBtnClick = e => {
    handleModalBtnClick(e);
    handleSelectedLink();
  };

  return (
    <div className={styles.container} onClick={handlePopoverClick}>
      <button className={`popover-item ${styles.btn}`} data-modal={modalTypes.deleteLink} onClick={onBtnClick}>
        삭제하기
      </button>
      <button className={`popover-item ${styles.btn}`} data-modal={modalTypes.add} onClick={onBtnClick}>
        폴더에 추가
      </button>
    </div>
  );
};

export default Popover;
