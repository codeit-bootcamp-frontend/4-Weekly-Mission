import classNames from 'classnames';

import styles from 'components/Common/AddLInkButton.module.css';
import Button from 'components/Common/Button';

function AddLinkButton() {
  const buttonClasses = classNames(styles['add-link-button'], 'button-background-primary', 'button-text-light');

  const button = <Button className={buttonClasses} text="추가하기" />;
  return button;
}

export default AddLinkButton;
