import classNames from 'classnames';
import styles from './AddFolderButton.module.css';
import Button from './Button';

function AddFolderButton({ className, text, onClick }) {
  const buttonClasses = classNames(styles['add-folder-button'], className);
  const button = (
    <Button className={buttonClasses} onClick={onClick}>
      {text}
    </Button>
  );

  return button;
}

export default AddFolderButton;
