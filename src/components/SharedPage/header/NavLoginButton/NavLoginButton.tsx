import styles from './NavLoginButton.module.css';

function NavLoginButton(): JSX.Element {
  return <button className={styles['nav-login-button']}>로그인</button>;
}

export default NavLoginButton;
