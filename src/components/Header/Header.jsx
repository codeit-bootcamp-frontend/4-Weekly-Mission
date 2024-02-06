import styles from "./Header.module.css";
import logo from "../../assets/header-logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headings}>
        <h1 className={styles["header-logo"]}>
          <a href="/">
            <img src={logo} alt="header_logo" />
          </a>
        </h1>
        <a href="/signin" className="btn">
          로그인
        </a>
      </div>
    </header>
  );
}
