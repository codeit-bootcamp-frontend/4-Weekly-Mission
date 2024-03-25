import AddLinkInputGlassIcon from "@/assets/svg/AddLinkInputGlassIcon";
import styles from "./AddLinkInput.module.scss";

export default function AddLinkInput() {
  return (
    <section className={styles.AddLinkInput}>
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <AddLinkInputGlassIcon />
          <input
            className={styles.input}
            placeholder="링크를 추가해 보세요"
            type="text"
          />
        </div>
        {/* 모달로 변경 예정 */}
        <button className={styles.inputBtn}>추가하기</button>
      </form>
    </section>
  );
}
