import './LoginButton.css';
import Button from './Button';

function LoginButton() {
  const button = <Button className="login-button button-background-primary button-text-light" text="로그인" />;
  return button;
}

export default LoginButton;
