import Button from "./components/Button";
import CloseIcon from "./components/CloseIcon";
import styles from "./styles/modal.module.css";

export default function Delete({ modal, handleOnClickClose }) {
  return (
    !modal && (
      <div className={styles.backdrop} name="삭제">
        <div className={styles.container}>
          <CloseIcon handleOnClickClose={handleOnClickClose} />
          <p className={styles.title}>폴더 삭제</p>
          <p className={styles["sub-text"]}>폴더명</p>
          <Button buttonColor="red">삭제하기</Button>
        </div>
      </div>
    )
  );
}
