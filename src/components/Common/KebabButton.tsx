import classNames from 'classnames';
import PropTypes from 'prop-types';

import KebabImg from 'assets/images/kebab.svg';

import Button from 'components/Common/Button';
import styles from 'components/Common/KebabButton.module.css';

function KebabButton({ className, onClick }) {
  const buttonClasses = classNames(styles['kebab-button'], 'background-none', 'border-none', className);
  const buttonImageClasses = classNames('width-full');

  return (
    <Button className={buttonClasses} onClick={onClick}>
      <img className={buttonImageClasses} src={KebabImg} alt="KebabIcon" />
    </Button>
  );
}

KebabButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

KebabButton.defaultProps = {
  className: '',
  onClick: null,
};

export default KebabButton;
