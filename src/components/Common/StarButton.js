import classNames from 'classnames';
import PropTypes from 'prop-types';

import StarImg from 'assets/images/star.svg';

import Button from 'components/Common/Button';
import styles from 'components/Common/KebabButton.module.css';

function StarButton({ className, onClick }) {
  const buttonClasses = classNames(styles['star-button'], 'background-none', 'border-none', className);
  const buttonImageClasses = classNames('width-full');

  return (
    <Button className={buttonClasses} onClick={onClick}>
      <img className={buttonImageClasses} src={StarImg} alt="StarIcon" />
    </Button>
  );
}

StarButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

StarButton.defaultProps = {
  className: '',
  onClick: null,
};

export default StarButton;
