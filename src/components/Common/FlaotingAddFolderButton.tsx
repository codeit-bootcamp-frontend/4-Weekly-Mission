import classNames from 'classnames';

import AddIcon from 'assets/images/add-gray10.svg';

import Button from 'components/Common/Button';
import styles from 'components/Common/FloatingAddFolderButton.module.css';

function FloatingAddFolderButton({ className, onClick }) {
  const buttonClasses = classNames(
    styles['floating-add-folder-button'],
    'text-color-gray10',
    'background-primary',
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
