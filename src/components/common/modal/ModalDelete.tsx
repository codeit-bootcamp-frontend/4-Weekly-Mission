import styles from './ModalDelete.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

interface Props {
  subTitle: string;
}

const ModalDelete = ({ subTitle }: Props) => {
  return (
    <div className={cn('modal-delete-content')}>
      <div className={cn('delete-area')}>{subTitle}</div>
      <button className={cn('delete-button')}>삭제하기</button>
    </div>
  );
};

export default ModalDelete;
