import PropTypes from 'prop-types';
// import styles from './Button.module.css';

function Button({ className, text }) {
  return (
    <button className={className} type="button">
      {text}
    </button>
  );
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
