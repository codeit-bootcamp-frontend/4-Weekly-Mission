import classNames from 'classnames';
import styles from './SortingButton.module.css';
import Button from './Button';

function SortingButton({ className, text, onClick }) {
  const buttonClasses = classNames(styles['sorting-button'], 'background-white', className);

  const button = <Button className={buttonClasses} text={text} onClick={onClick} />;
  return button;
}

export default SortingButton;
