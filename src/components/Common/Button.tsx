import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from 'components/Common/Button.module.css';

interface ButtonProps {
  className?: string;
  text?: string;
  onClick?: () => void;
  children?: ReactNode;
}

function Button({ className = '', text = '', onClick, children }: ButtonProps) {
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
