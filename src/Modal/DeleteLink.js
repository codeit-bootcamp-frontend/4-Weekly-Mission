import styles from "./Modal.module.css";

function DeleteLink({ selectedLink }) {
  return (
    <>
      <div className={styles["ModalTitle"]}>링크 삭제</div>
      <div className={styles["ModalSubtitle"]}>{selectedLink}</div>
      <button className={styles["deleteButton"]}>삭제하기</button>
    </>
  );
}

export default DeleteLink;
