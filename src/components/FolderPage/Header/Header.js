import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles["addLink"]}>
        <input className={styles["addLink-input"]} />
      </div>
    </>
  );
};

export default Header;
