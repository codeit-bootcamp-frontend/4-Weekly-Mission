import BaseModeal from "../BaseModal/BaseModal";
import styles from "./delete.module.css";
import { DELETE_LINK, DELETE_FOLDER } from "utils/constants/strings";
import { ModalProps } from "../BaseModal/BaseModal";

interface Props extends ModalProps {
  deleted: string;
}

function DeleteModal({ variant, deleted, closeModal }: Props) {
  let title;
  if (variant === DELETE_FOLDER) {
    title = "폴더";
  } else if (variant === DELETE_LINK) {
    title = "링크";
  }

  return (
    <BaseModeal
      title={`${title} 삭제`}
      variant={variant}
      closeModal={closeModal}
    >
      <p className={styles.deleted}>{deleted}</p>
      <button className={styles.deletedBtn}>삭제하기</button>
    </BaseModeal>
  );
}

export default DeleteModal;
