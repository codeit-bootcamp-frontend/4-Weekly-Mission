import { useEffect, useState } from "react";
import styles from "../../css/FolderItem.module.css";
function FolderItem({ folderTitle, folderDate, folderImageSource }) {
  const now = new Date().getTime();
  const creadtedDate = new Date(`${folderDate}`).getTime();
  const minutes = (now - creadtedDate) / (1000 * 60);
  const hours = (now - creadtedDate) / (1000 * 60 * 60);
  const days = (now - creadtedDate) / (1000 * 60 * 60 * 24);
  const months = (now - creadtedDate) / (1000 * 60 * 60 * 24 * 30);
  const years = (now - creadtedDate) / (1000 * 60 * 60 * 24 * 30 * 12);
  const [creadtedAt, setCreadtedAt] = useState("");
  useEffect(() => {
    if (Math.floor(months) == 1) {
      setCreadtedAt("1 month ago");
    } else if (Math.floor(months) > 1 && Math.floor(months) <= 11) {
      setCreadtedAt(`${Math.floor(months)} months ago`);
    } else if (Math.floor(months) == 12) {
      setCreadtedAt("1 year ago");
    } else {
      setCreadtedAt(`${Math.floor(Math.floor(months) / 12)} years ago`);
    }
  }, []);
  return (
    <div className={styles.folder_item_box}>
      <div className={styles.folder_image_box}>
        <img src={folderImageSource} className={styles.folder_image} />
      </div>
      <div className={styles.folder_detail_box}>
        <div className={styles.folder_createdAt}>{creadtedAt}</div>
        <div className={styles.folder_title}>{folderTitle}</div>
        <div className={styles.folder_date}>{folderDate.slice(0, 10)}</div>
      </div>
    </div>
  );
}

export default FolderItem;
