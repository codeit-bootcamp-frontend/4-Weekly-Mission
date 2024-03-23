import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from 'components/Common/Button';
import styles from 'components/Common/Option.module.css';

function Option({ imageUrl, text, className, onClick }) {
  const optionClasses = classNames(
    styles.option,
    'flex-row',
    'align-center',
    'text-color-gray60',
    'border-none',
    'background-none',
    className
  );
  const optionImageClasses = classNames(styles['option-image']);

  return (
    <Button className={optionClasses} onClick={onClick}>
      <img className={optionImageClasses} src={imageUrl} alt={text} />
      {text}
    </Button>
  );
}

Option.propTypes = {
  imageUrl: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Option.defaultProps = {
  imageUrl: '',
  text: '',
  className: '',
  onClick: null,
};

export default Option;
