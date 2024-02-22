import classNames from 'classnames';

import AddIcon from 'assets/images/add-primary.svg';

import styles from 'components/Common/AddFolderButton.module.css';
import Button from 'components/Common/Button';

function AddFolderButton({ className, onClick }) {
  const buttonClasses = classNames(
    styles['add-folder-button'],
    'flex-row',
    'align-center',
    'white-space-nowrap',
    'text-color-primary',
    'background-white',
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
