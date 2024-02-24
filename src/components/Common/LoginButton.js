import classNames from 'classnames';

import Button from 'components/Common/Button';
import styles from 'components/Common/LoginButton.module.css';

function LoginButton() {
  const buttonClasses = classNames(styles['login-button'], 'button-background-primary', 'button-text-light');

  const button = <Button className={buttonClasses} text="로그인" />;
  return button;
}

export default LoginButton;
