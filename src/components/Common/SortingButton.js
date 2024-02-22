import classNames from 'classnames';

import Button from 'components/Common/Button';

import styles from './SortingButton.module.css';

function SortingButton({ className, text, onClick }) {
  const buttonClasses = classNames(styles['sorting-button'], 'background-white', className);

  const button = <Button className={buttonClasses} text={text} onClick={onClick} />;
  return button;
}

export default SortingButton;
