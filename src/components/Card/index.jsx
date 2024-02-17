import style from "./Card.module.css";
import { getTimeAgo, formatDate } from "util/time";
import noImg from "assets/noImg.png";
import starImg from "assets/star.png";
import kebabImg from "assets/kebab.png";
import { memo } from "react";

export default memo(function Card({ link }) {
  const creationTime = "createdAt" in link ? "createdAt" : "created_at";
  console.log(link.title);

  return (
    <a href={link.url} target="_blank">
      <div className={style.link}>
        <div className={style["link-cover"]}>
          <img src={link.imageSource || noImg} alt="cardCover" />:
        </div>
        <button className={style.likeBtn}>
          <img src={starImg} alt="likeBtn" />
        </button>
        <div className={style["link-contents"]}>
          <div className={style["link-header"]}>
            <p className={style["link-update"]}>
              {getTimeAgo(link[creationTime])}
            </p>
            <button className={style.kebabBtn}>
              <img src={kebabImg} alt="kebabImg" />
            </button>
          </div>
          <h2 className={style["link-title"]}>
            {link.title === null ? "제목없음" : link.title}
          </h2>
          <p className={style["link-description"]}>{link.description}</p>
          <p className={style["link-date"]}>{formatDate(link[creationTime])}</p>
        </div>
      </div>
    </a>
  );
});
