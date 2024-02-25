import { HiOutlineLink } from 'react-icons/hi';

import GradientButton from '../common/GradientButton/GradientButton';

import styles from './AddBar.module.scss';
const AddBar = () => {
  return (
    <section className={styles.layout}>
      <colorBox className={styles.colorBox}>
        <HiOutlineLink className={styles.linkLogo} />
        <input className={styles.input} placeholder='링크를 추가 해보세요' />
        <GradientButton className={styles.gradientButton}>추가하기</GradientButton>
      </colorBox>
    </section>
  );
};

export default AddBar;
