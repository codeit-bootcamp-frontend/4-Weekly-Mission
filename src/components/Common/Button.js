import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

function Button({ className, text, onClick }) {
  const buttonClasses = classNames(styles.button, className);

  const button = (
    <button className={buttonClasses} type="button" onClick={onClick}>
      {text}
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
