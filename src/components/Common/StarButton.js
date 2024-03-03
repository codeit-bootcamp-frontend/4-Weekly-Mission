import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as StarImg } from 'assets/images/star.svg';

import Button from 'components/Common/Button';
import styles from 'components/Common/KebabButton.module.css';

function StarButton({ className, onClick, isFavorite }) {
  const buttonClasses = classNames(styles['star-button'], 'background-none', 'border-none', className);
  // star.svg -> fill="current" fill-opacity="current" stroke="current" -> styles에 작성
  const buttonImageClasses = classNames('width-full');

  const DefaultStar = <StarImg className={buttonImageClasses} fill="black" fillOpacity={0.2} />;
  const FavoriteStar = <StarImg className={buttonImageClasses} fill="var(--primary, #6d6afe)" fillOpacity={1} />;

  return (
    <Button className={buttonClasses} onClick={onClick}>
      {isFavorite ? FavoriteStar : DefaultStar}
    </Button>
  );
}

StarButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

StarButton.defaultProps = {
  className: '',
};

export default StarButton;
