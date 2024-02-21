import styles from "./AddLinkBar.module.css";
import link from "../images/link.svg";

function AddLinkBar() {
  return (
    <div className={styles.area}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <img src={link} alt="링크" />
          <input
            className={styles.input}
            type="text"
            placeholder="링크를 추가해 보세요"
          />
        </div>
        <button className={styles.button}>추가하기</button>
      </div>
    </div>
  );
}

export default AddLinkBar;
