import classNames from 'classnames';
import styles from './FloatingActionButton.module.css';
import Button from './Button';

function FloatingActionButton({ className, text, onClick }) {
  const buttonClasses = classNames(styles['floating-action-button'], 'text-color-gray10', className);
  const button = <Button className={buttonClasses} text={text} onClick={onClick} />;

  return button;
}

export default FloatingActionButton;
