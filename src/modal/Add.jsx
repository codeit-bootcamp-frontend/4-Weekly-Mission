import Button from "./components/Button";
import CloseIcon from "./components/CloseIcon";
import styles from "./styles/modal.module.css";

export default function Add({ modal, handleOnClickClose }) {
  return (
    !modal && (
      <div className={styles.backdrop}>
        <div className={styles.container}>
          <CloseIcon handleOnClickClose={handleOnClickClose} />
          <p className={styles.title}>폴더 추가</p>
          <input className={styles.input} type="text" placeholder="내용 입력" />
          <Button buttonColor="blue">추가하기</Button>
        </div>
      </div>
    )
  );
}
