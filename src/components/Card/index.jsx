import styles from "./styles.module.css";
import { getTimeAgo, formatDate } from "util/time";
import noImg from "assets/noImg.png";
import starImg from "assets/star.png";
import kebabImg from "assets/kebab.png";

export default function Card({ link }) {
  const createdAt = "createdAt" in link ? "createdAt" : "created_at";
  const imageSource = "imageSource" in link ? "imageSource" : "image_source";

  return (
    <a href={link.url} target="_blank" rel="noreferrer">
      <div className={styles.link}>
        <div className={styles["link-cover"]}>
          <img src={link[imageSource] || noImg} alt="cardCover" />:
        </div>
        <button className={styles.likeBtn}>
          <img src={starImg} alt="likeBtn" />
        </button>
        <div className={styles["link-contents"]}>
          <div className={styles["link-header"]}>
            <p className={styles["link-update"]}>
              {getTimeAgo(link[createdAt])}
            </p>
            <button className={styles.moreBtn}>
              <img src={kebabImg} alt="kebabImg" />
            </button>
          </div>
          <h2 className={styles["link-title"]}>
            {!link.title ? "제목없음" : link.title}
          </h2>
          <p className={styles["link-description"]}>{link.description}</p>
          <p className={styles["link-date"]}>{formatDate(link[createdAt])}</p>
        </div>
      </div>
    </a>
  );
}
