import styles from './FolderButton.module.scss';
import classNames from 'classnames/bind';

type FolderButtonType = {
  text: string;
  onClick: () => void;
  isSelected: boolean;
};

const cx = classNames.bind(styles);

const FolderButton = ({ text, onClick, isSelected = false }: FolderButtonType) => {
  return (
    <button className={cx('container', { selected: isSelected })} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default FolderButton;
