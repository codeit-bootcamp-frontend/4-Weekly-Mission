import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from 'components/Common/ErrorMessage.module.css';

function ErrorMessage({ message }) {
  const messageClasses = classNames(styles['error-message'], 'text-center');
  return <p className={messageClasses}>{message}</p>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: '',
};

export default ErrorMessage;
