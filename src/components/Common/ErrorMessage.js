import './ErrorMessage.css';
import PropTypes from 'prop-types';

function ErrorMessage({ message }) {
  return <p className="error-message text-center">{message}</p>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: '',
};

export default ErrorMessage;
