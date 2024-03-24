import styles from '../styles/ModalEdit.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

const ModalEdit = () => {
  return (
    <div className={cn('modal-edit-content')}>
      <input className={cn('edit-input')} placeholder='내용 입력'></input>
      <button className={cn('edit-button')}>변경/추가하기</button>
    </div>
  );
};

export default ModalEdit;
