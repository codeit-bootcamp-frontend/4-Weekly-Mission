import React from "react";
import styles from "./FolderTitle.module.css";

function FolderTilte({ folderObject }) {
  if (!folderObject) {
    return null;
  }

  const { folder } = folderObject;
  const { name: folderName, owner } = folder;
  const { profileImageSource, name } = owner;

  return (
    <section className={styles.folderTitle_section}>
      <div className={styles.folderTitle_content}>
        <div>
          <img
            src={profileImageSource ?? "Icons/default_user_icon.svg"}
            alt={profileImageSource}
            className={styles.folderTitle_img}
          />
          <p className={styles.folderTitle_userName}>@{name}</p>
        </div>
        <h2 className={styles.folderTitle_folderName}>
          {folderName}
        </h2>
      </div>
    </section>
  );
}

export default FolderTilte;
