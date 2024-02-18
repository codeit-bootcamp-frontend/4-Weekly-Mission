import React from "react";
import styles from "./header.module.css";

function Header({ fileImg, ownerName, folderName }) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img className={styles.img} src={fileImg} alt="프로필 이미지"/>
        <div className={styles.name}>{ownerName}</div>
        <div className={styles.folder}>{folderName}</div>
      </div>
    </div>
  );
}

export default Header;
