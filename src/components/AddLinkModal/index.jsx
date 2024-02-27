import { Modal } from "components/Modal";
import { forwardRef, useState } from "react";
import styles from "./styles.module.css";
import checkIcon from "assets/check.svg";

export const AddLinkModal = forwardRef(
  ({ openModal, handleModalClose, folders, linkUrl }, ref) => {
    const [selectedId, setSelectedId] = useState(null);

    const handleFolderClick = (id) => {
      setSelectedId(id);
    };

    return (
      <Modal
        modalRef={ref}
        openModal={openModal}
        handleModalClose={handleModalClose}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>폴더에 추가</h2>
          <p className={styles.description}>{linkUrl}</p>
          <ul className={styles.select}>
            {folders.map((folder) => (
              <li
                key={folder.id}
                className={`${styles.option} ${
                  selectedId === folder.id ? `${styles.active}` : ""
                }`}
                onClick={() => handleFolderClick(folder.id)}
              >
                <div className={styles.optionContainer}>
                  <span className={styles.optionTitle}>{folder.name}</span>
                  <span className={styles.optionSubTitle}>
                    {folder.link.count}개 링크
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <button className={styles.btn}>추가하기</button>
        </div>
      </Modal>
    );
  }
);
