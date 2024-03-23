import styles from "./Modal.module.css";
import { useState } from "react";

interface Link {
  count: number;
  name: string;
  id: number;
}

interface Category {
  id: number;
  name: string;
  link: Link;
}

function AddToMyFolder({
  currentUrl,
  categoryData,
}: {
  currentUrl: string;
  categoryData: Category[];
}) {
  const [selectedFolder, setSelectedFolder] = useState<number>();

  const handleFolderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setSelectedFolder(+e.currentTarget.id);
  };

  return (
    <>
      <div className={styles.ModalTitle}>폴더에 추가</div>
      <div className={styles.ModalSubtitle}>{currentUrl}</div>
      <div className={styles.folderWrapper}>
        {categoryData?.map((link: any) => (
          <div
            key={link.name}
            className={`${styles.folderButton} ${
              selectedFolder === link.id ? styles.selectedFolder : ""
            }`}
            onClick={handleFolderClick}
            id={link.id}
          >
            <span className={styles.folderButtonName}>{link.name}</span>
            <span
              className={styles.folderButtonLinks}
            >{`${link?.link.count}개 링크`}</span>
            {selectedFolder === link.id && (
              <img
                className={styles.checkIcon}
                src="images/check-icon.svg"
                alt="check icon"
              />
            )}
          </div>
        ))}
      </div>
      <button className={styles.submitButton}>추가하기</button>
    </>
  );
}

export default AddToMyFolder;
