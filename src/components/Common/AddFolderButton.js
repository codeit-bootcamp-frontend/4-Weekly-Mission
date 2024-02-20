import classNames from 'classnames';
import styles from './AddFolderButton.module.css';
import Button from './Button';
import AddIcon from '../../assets/images/add.svg';

function AddFolderButton({ className, onClick }) {
  const buttonClasses = classNames(styles['add-folder-button'], 'text-color-primary', className);
  const iconClasses = classNames(styles['add-folder-icon']);
  const button = (
    <Button className={buttonClasses} onClick={onClick}>
      폴더 추가
      <img className={iconClasses} src={AddIcon} alt="AddIcon" />
    </Button>
  );

  return button;
}

export default AddFolderButton;
