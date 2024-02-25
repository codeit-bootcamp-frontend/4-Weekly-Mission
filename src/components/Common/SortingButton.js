import classNames from 'classnames';

import Button from 'components/Common/Button';
import styles from 'components/Common/SortingButton.module.css';

function SortingButton({ className, text, onClick, onMouseEnter, onMouseLeave }) {
  const buttonClasses = classNames(styles['sorting-button'], className);

  const button = (
    <Button
      className={buttonClasses}
      text={text}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
  return button;
}

export default SortingButton;
