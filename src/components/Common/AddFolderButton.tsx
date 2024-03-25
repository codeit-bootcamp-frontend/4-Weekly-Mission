import classNames from 'classnames';
import React from 'react';

import AddIcon from 'assets/images/add-primary.svg';

import styles from 'components/Common/AddFolderButton.module.css';
import Button from 'components/Common/Button';

interface AddFolderButtonProps {
  className?: string;
  onClick: () => void;
}

function AddFolderButton({ className = '', onClick }: AddFolderButtonProps) {
  const buttonClasses = classNames(
    styles['add-folder-button'],
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
