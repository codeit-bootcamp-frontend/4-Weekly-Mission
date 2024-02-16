import style from "./Card.module.css";
import { getTimeAgo, formatDate } from "util/time";
import noImg from "assets/noImg.png";
import starImg from "assets/star.png";
import kebabImg from "assets/kebab.png";

export default function Card({ link }) {
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
            <p className={style["link-update"]}>{getTimeAgo(link.createdAt)}</p>
            <button className={style.kebabBtn}>
              <img src={kebabImg} alt="kebabImg" />
            </button>
          </div>
          <h2 className={style["link-title"]}>{link.title}</h2>
          <p className={style["link-description"]}>{link.description}</p>
          <p className={style["link-date"]}>{formatDate(link.createdAt)}</p>
        </div>
      </div>
    </a>
  );
}
