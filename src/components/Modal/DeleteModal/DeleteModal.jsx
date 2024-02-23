import BaseModeal from "../BaseModal/BaseModal";
import styles from "./delete.module.css";

function DeleteModal({ variant, deleted, closeModal }) {
  let title;
  if(variant === "delete-folder"){
    title = "폴더"
  }else if(variant === "delete-link"){
    title = "링크"
  }

  return (
    <BaseModeal title={`${title} 삭제`} variant={variant} closeModal={closeModal}>
      <p className={styles.deleted}>{deleted}</p>
      <button className={styles.deletedBtn}>삭제하기</button>
    </BaseModeal>
  );
}

export default DeleteModal;
