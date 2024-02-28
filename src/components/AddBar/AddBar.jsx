import { useState } from 'react';

import { HiOutlineLink } from 'react-icons/hi';

import Modal from '../Modal/Modal';
import GradientButton from '../common/GradientButton/GradientButton';

import styles from './AddBar.module.scss';
const AddBar = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <section className={styles.layout}>
      <div className={styles.colorBox}>
        <HiOutlineLink className={styles.linkLogo} />
        <input className={styles.input} placeholder='링크를 추가 해보세요' />
        <div className={styles.gradientButton}>
          <GradientButton onClick={toggleModal}>추가하기</GradientButton>
        </div>
        {showModal && (
          <Modal title='폴더 추가' onClick={toggleModal}>
            <input className={styles.modalInput} placeholder='내용 입력' />
            <GradientButton className={styles.modalButton}>추가하기</GradientButton>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default AddBar;
