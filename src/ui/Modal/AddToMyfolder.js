import styles from "./Modal.module.css";
import { useState } from "react";

function AddToMyFolder({ currentUrl, categoryData }) {
  const [selectedFolder, setSelectedFolder] = useState();

  const handleFolderClick = (e) => {
    setSelectedFolder(+e.currentTarget.id);
  };

  return (
    <>
      <div className={styles["ModalTitle"]}>폴더에 추가</div>
      <div className={styles["ModalSubtitle"]}>{currentUrl}</div>
      <div className={styles["folder-wrapper"]}>
        {categoryData?.map((link) => (
          <div
            key={link.name}
            className={`${styles["folderButton"]} ${
              selectedFolder === link.id ? styles["selectedFolder"] : ""
            }`}
            onClick={handleFolderClick}
            id={link.id}
          >
            <span className={styles["folderButton-name"]}>{link.name}</span>
            <span
              className={styles["folderButton-links"]}
            >{`${link?.link.count}개 링크`}</span>
            {selectedFolder === link.id && (
              <img
                className={styles["checkIcon"]}
                src="images/check-icon.svg"
                alt="check icon"
              />
            )}
          </div>
        ))}
      </div>
      <button className={styles["submitButton"]}>추가하기</button>
    </>
  );
}

export default AddToMyFolder;
