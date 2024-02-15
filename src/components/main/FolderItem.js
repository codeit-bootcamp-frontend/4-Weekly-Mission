import styles from "./FolderItem.module.css";
import * as functions from "../../functions/formatTimeAgo.js";
function FolderItem({ folderUrl, folderTitle, folderDate, folderImageSource }) {
  return (
    <a href={folderUrl} className={styles.folder_link}>
      <div className={styles.folder_item_box}>
        {folderImageSource ? (
          <div className={styles.folder_image_box}>
            <img src={folderImageSource} className={styles.folder_image} />
          </div>
        ) : (
          <div className={styles.folder_image_box}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/folder_no_image.svg`}
              className={styles.folder_no_image}
            />
          </div>
        )}

        <div className={styles.folder_detail_box}>
          <div className={styles.folder_createdAt}>
            {functions.formatTimeAgo(folderDate)}
          </div>
          <div className={styles.folder_title}>{folderTitle}</div>
          <div className={styles.folder_date}>{folderDate.slice(0, 10)}</div>
        </div>
      </div>
    </a>
  );
}

export default FolderItem;
