import classNames from 'classnames';
import React from 'react';

import styles from 'components/Common/Button.module.css';

interface ButtonProps {
  className?: string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

function Button({ className = '', text = '', onClick, children = null }: ButtonProps) {
  const buttonClasses = classNames(styles.button, 'cursor-pointer', className);

  const button = (
    <button className={buttonClasses} type="button" onClick={onClick}>
      {text}
      {children}
    </button>
  );

  return button;
}

export default Button;
