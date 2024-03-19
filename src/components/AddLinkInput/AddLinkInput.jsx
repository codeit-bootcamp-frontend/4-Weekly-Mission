import styles from "./AddLinkInput.module.scss";
import InputIcon from "../../assets/svg/InputIcon";

export default function AddLinkInput() {
  return (
    <section className={styles.AddLinkInput}>
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <InputIcon />
          <input className={styles.input} placeholder="링크를 추가해 보세요" />
        </div>
        <button className={styles.inputBtn}>추가하기</button>
      </form>
    </section>
  );
}
