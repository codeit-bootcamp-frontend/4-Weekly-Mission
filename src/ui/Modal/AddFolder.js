import styles from "./Modal.module.css";

function AddFolder() {
  return (
    <>
      <div className={styles["ModalTitle"]}>폴더 추가</div>
      <input placeholder="내용입력"></input>
      <button className={styles["submitButton"]}>추가하기</button>
    </>
  );
}

export default AddFolder;
