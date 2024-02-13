import React from "react";
import styles from "./css/FolderTitle.module.css";

function FolderTilte({ folderObject }) {
  if (!folderObject) {
    return null;
  }

  const { folder } = folderObject;
  const { name: folderName, owner } = folder;
  const { profileImageSource, name } = owner;

  return (
    <section className={styles.FolderTitle_container}>
      <div className={styles.FolderTitle_content}>
        <div>
          <img
            src={profileImageSource ?? "Icons/default_user_icon.svg"}
            alt={profileImageSource}
            className={styles.FolderTitle_img}
          />
          <p className={styles.FolderTitle_userName}>@{name}</p>
        </div>
        <h2 className={styles.FolderTitle_folderName}>
          {folderName}
        </h2>
      </div>
    </section>
  );
}

export default FolderTilte;
