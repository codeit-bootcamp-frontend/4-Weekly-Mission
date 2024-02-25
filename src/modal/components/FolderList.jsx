import styles from "../styles/FolderList.module.css";
import { useState } from "react";
import CheckImage from "../images/check.svg";

export default function FolderList({ name, linkCount }) {
  const [focus, setFous] = useState(false);

  const handleFocus = () => {
    setFous(!focus);
  };

  return (
    <div
      className={`${styles["folder-item"]} ${
        focus ? styles["folder-item--focus"] : ""
      }`}
      onClick={handleFocus}
    >
      <div>
        <p className={styles["folder-list-name"]}>{name}</p>
        <p className={styles["link-count"]}>{`${linkCount}개 링크`}</p>
      </div>
      <img
        className={`${focus ? styles["check-img"] : styles["check-img--hide"]}`}
        src={CheckImage}
        alt="체크 표시"
        onClick={handleFocus}
      />
    </div>
  );
}
