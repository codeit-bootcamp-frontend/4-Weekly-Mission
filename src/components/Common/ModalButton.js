import classNames from 'classnames';

import Button from 'components/Common/Button';
import styles from 'components/Common/ModalButton.module.css';

function ModalButton({ className, text, onClick }) {
  const buttonClasses = classNames(styles.button, 'text-color-light', 'border-none', className);

  const button = <Button className={buttonClasses} text={text} onClick={onClick} />;
  return button;
}

export default ModalButton;
