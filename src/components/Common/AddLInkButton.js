import classNames from 'classnames';

import styles from './AddLInkButton.module.css';
import Button from './Button';

function AddLinkButton() {
  const buttonClasses = classNames(styles['add-link-button'], 'button-background-primary', 'button-text-light');

  const button = <Button className={buttonClasses} text="추가하기" />;
  return button;
}

export default AddLinkButton;
