import styles from "./Modal.module.css";
interface Prop {
  currentCategory: string;
}

function DeleteFolder({ currentCategory }: Prop) {
  return (
    <>
      <div className={styles.ModalTitle}>폴더 삭제</div>
      <div className={styles.ModalSubtitle}>{currentCategory}</div>
      <button className={styles.deleteButton}>삭제하기</button>
    </>
  );
}

export default DeleteFolder;
