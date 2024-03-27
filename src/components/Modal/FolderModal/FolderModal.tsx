import BaseModeal from "../BaseModal/BaseModal";
import styles from "./folder.module.css";
import { ADD_LINK, ADD_FOLDER, EDIT } from "utils/constants/strings";
import { ModalProps } from "../BaseModal/BaseModal";
import { GetFolderResponse } from "types/apis";

interface Props extends ModalProps {
  link?: string;
  deleted?: string;
  list?: GetFolderResponse[] | null;
}

function FolderModal({ variant, closeModal, link, list }: Props) {
  let title!: string, action!: string;

  if (variant === EDIT) {
    title = "폴더 이름 변경";
    action = "변경하기";
  } else if (variant === ADD_FOLDER) {
    title = "폴더 추가";
    action = "추가하기";
  } else if (variant === ADD_LINK) {
    title = "폴더에 추가";
    action = "추가하기";
  }

  return (
    <BaseModeal title={title} variant={variant} closeModal={closeModal}>
      {list ? (
        <div className={styles.warpper}>
          <p className={styles.link}>{link}</p>
          <ul className={styles.items}>
            {list.map(({ id, name, link }) => (
              <li key={id} className={styles.item}>
                <span className={styles.folder}>{name}</span>{" "}
                <span className={styles.count}>{`${link.count}개 링크`}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <input type="text" className={styles.input} placeholder="내용 입력" />
      )}

      <button className={`${styles.btn}`}>{action}</button>
    </BaseModeal>
  );
}

export default FolderModal;
