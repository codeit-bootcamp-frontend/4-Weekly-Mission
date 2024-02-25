import classNames from 'classnames';

import styles from 'components/Common/AddLInkButton.module.css';
import Button from 'components/Common/Button';

function AddLinkButton({ className, onClick }) {
  const buttonClasses = classNames(styles['add-link-button'], 'background-gra-primary', 'text-color-light', className);

  const button = <Button className={buttonClasses} text="추가하기" onClick={onClick} />;
  return button;
}

export default AddLinkButton;
