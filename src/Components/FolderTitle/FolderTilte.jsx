import React from "react";
import styles from "./css/FolderTitle.module.css";

function FolderTilte({ folderName, owner }) {
  const { name, profileImageSource } = owner;
  return (
    <section className={styles.FolderTitle_container}>
      <div className={styles.FolderTitle_content}>
        <div>
          {profileImageSource ? (
            <img
              src={profileImageSource}
              alt={profileImageSource}
              className={styles.FolderTitle_img}
            />
          ) : (
            <img
              src="Icons/default_user_icon.svg"
              alt="기본 폴더 로고"
              className={styles.FolderTitle_img}
            />
          )}

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
