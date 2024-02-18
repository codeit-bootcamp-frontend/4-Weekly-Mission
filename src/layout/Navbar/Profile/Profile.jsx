import React from "react";
import styles from "./profile.module.css";

function Profile({ email, imgUrl }) {
  console.log(imgUrl)
  return (
    <div className={styles.container}>
      <img src={imgUrl} className={styles.img} />
      <p className={styles.email}>{email}</p>
    </div>
  );
}

export default Profile;
