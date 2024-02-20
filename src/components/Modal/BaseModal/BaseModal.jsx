import styles from "./base.module.css";
import closeIcon from "assets/images/ic_close.png";

function BaseModeal({ title, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        {children}
        <button>
          <img src={closeIcon} className={styles.close} />
        </button>
      </div>
    </div>
  );
}

export default BaseModeal;
