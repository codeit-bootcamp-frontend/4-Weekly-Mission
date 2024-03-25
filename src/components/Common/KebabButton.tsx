import classNames from 'classnames';
import React from 'react';

import KebabImg from 'assets/images/kebab.svg';

import Button from 'components/Common/Button';
import styles from 'components/Common/KebabButton.module.css';

interface KebabButtonProps {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function KebabButton({ className = '', onClick }: KebabButtonProps) {
  const buttonClasses = classNames(styles['kebab-button'], 'background-none', 'border-none', className);
  const buttonImageClasses = classNames('width-full');

  return (
    <Button className={buttonClasses} onClick={onClick}>
      <img className={buttonImageClasses} src={KebabImg} alt="KebabIcon" />
    </Button>
  );
}

export default KebabButton;
