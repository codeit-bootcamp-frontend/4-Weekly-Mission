import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from 'components/Common/Button.module.css';

function Button({ className, text, onClick, onMouseEnter, onMouseLeave, children }) {
  const buttonClasses = classNames(styles.button, className);

  const button = (
    <button
      className={buttonClasses}
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
      {children}
    </button>
  );

  return button;
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  text: '',
};

export default Button;
