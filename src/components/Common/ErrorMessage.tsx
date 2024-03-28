import classNames from 'classnames';

import styles from 'components/Common/ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  const messageClasses = classNames(styles['error-message'], 'text-center');
  return <p className={messageClasses}>{message}</p>;
}

export default ErrorMessage;
