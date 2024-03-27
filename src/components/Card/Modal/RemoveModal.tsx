import Modal from '../../Modal/Modal';
import styles from './RemoveModal.module.scss';

const RemoveModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal title='링크 삭제' onClose={onClose}>
      <p className={styles.description}>http://tmp.com</p>
      <button className={styles.removeButton}>삭제하기</button>
    </Modal>
  );
};

export default RemoveModal;
