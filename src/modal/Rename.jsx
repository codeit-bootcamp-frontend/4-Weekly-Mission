import Button from "./components/Button";
import CloseIcon from "./components/CloseIcon";
import styles from "./styles/modal.module.css";

export default function Rename({ modal, handleOnClickClose }) {
  return (
    !modal && (
      <div className={styles.backdrop} name="이름 변경">
        <div className={styles.container}>
          <CloseIcon handleOnClickClose={handleOnClickClose} />
          <p className={styles.title}>폴더 이름 변경</p>
          <input className={styles.input} type="text" />
          <Button buttonColor="blue">변경하기</Button>
        </div>
      </div>
    )
  );
}
