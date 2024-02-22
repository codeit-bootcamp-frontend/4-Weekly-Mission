import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from 'components/Common/Option.module.css';

function Option({ imageUrl, text, className }) {
  const optionClasses = classNames(styles.option, 'flex-row', 'text-color-gray60', className);
  const optionImageClasses = classNames(styles['option-image']);

  return (
    <div className={optionClasses}>
      <img className={optionImageClasses} src={imageUrl} alt={text} />
      {text}
    </div>
  );
}

Option.propTypes = {
  imageUrl: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

Option.defaultProps = {
  imageUrl: '',
  text: '',
  className: '',
};

export default Option;
