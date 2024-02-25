import Button from "./components/Button";
import CloseIcon from "./components/CloseIcon";
import styles from "./styles/modal.module.css";

export default function LinkDelete({ modal, handleOnClickClose }) {
  return (
    !modal && (
      <div className={styles.backdrop}>
        <div className={styles.container}>
          <CloseIcon handleOnClickClose={handleOnClickClose} />
          <p className={styles.title}>링크 삭제</p>
          <p className={styles["sub-text"]}>링크</p>
          <Button buttonColor="red">삭제하기</Button>
        </div>
      </div>
    )
  );
}
