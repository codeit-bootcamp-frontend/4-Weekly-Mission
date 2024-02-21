import BaseModeal from "../BaseModal/BaseModal";
import styles from "./folder.module.css";

function FolderModal({ variant, setModals, link, list }) {
  // edit -> input
  // add-folder -> inpit
  // add-link -> list

  let title, action;
  if (variant === "edit") {
    title = "폴더 이름 변경";
    action = "변경하기";
  } else if (variant === "add-folder") {
    title = "폴더 추가";
    action = "추가하기";
  } else if (variant === "add-link") {
    title = "폴더에 추가";
    action = "추가하기";
  }

  // list가 있으면 목록
  // 없으면 input

  return (
    <BaseModeal title={title} variant={variant} setModals={setModals}>
      {list ? (
        <div className={styles.warpper}>
          <p className={styles.link}>{link}</p>
          <ul className={styles.items}>
            {list.map(({ id, name, link }) => (
              <li key={id} className={styles.item}>
                <span className={styles.folder}>{name}</span> <span className={styles.count}>{`${link.count}개 링크`}</span>
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
