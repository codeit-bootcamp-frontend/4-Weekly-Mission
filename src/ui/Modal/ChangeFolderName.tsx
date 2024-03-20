import styles from "./Modal.module.css";

function ChangeFolderName({ currentCategory }: any) {
  return (
    <>
      <div className={styles.ModalTitle}>폴더 이름 변경</div>
      <input placeholder={currentCategory}></input>
      <button className={styles.submitButton}>변경하기</button>
    </>
  );
}

export default ChangeFolderName;
