import classNames from 'classnames';
import styles from './FloatingAddFolderButton.module.css';
import Button from './Button';
import AddIcon from '../../assets/images/add-gray10.svg';

function FloatingAddFolderButton({ className, onClick }) {
  const buttonClasses = classNames(
    styles['floating-add-folder-button'],
    'text-color-gray10',
    'background-primary',
    'flex-row',
    className
  );
  const iconClasses = classNames(styles['floating-add-folder-icon']);
  const button = (
    <Button className={buttonClasses} text="폴더 추가" onClick={onClick}>
      <img className={iconClasses} src={AddIcon} alt="AddIcon" />
    </Button>
  );

  return button;
}

export default FloatingAddFolderButton;
