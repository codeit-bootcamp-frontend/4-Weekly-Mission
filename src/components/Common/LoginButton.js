import classNames from 'classnames';
import styles from './LoginButton.module.css';
import Button from './Button';

function LoginButton() {
  const buttonClasses = classNames(styles['login-button'], 'button-background-primary', 'button-text-light');

  const button = <Button className={buttonClasses} text="로그인" />;
  return button;
}

export default LoginButton;
