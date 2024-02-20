import classNames from 'classnames';
import styles from './AddFolderButton.module.css';
import Button from './Button';
import AddIcon from '../../assets/images/add-primary.svg';

function AddFolderButton({ className, onClick }) {
  const buttonClasses = classNames(
    styles['add-folder-button'],
    'text-color-primary',
    'background-white',
    'flex-row',
    className
  );
  const iconClasses = classNames(styles['add-folder-icon']);
  const button = (
    <Button className={buttonClasses} text="폴더 추가" onClick={onClick}>
      <img className={iconClasses} src={AddIcon} alt="AddIcon" />
    </Button>
  );

  return button;
}

export default AddFolderButton;
