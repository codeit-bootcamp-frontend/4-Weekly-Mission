import styles from "./Modal.module.css";

function DeleteLink({ currentUrl }) {
  return (
    <>
      <div className={styles["ModalTitle"]}>링크 삭제</div>
      <div className={styles["ModalSubtitle"]}>{currentUrl}</div>
      <button className={styles["deleteButton"]}>삭제하기</button>
    </>
  );
}

export default DeleteLink;
