import style from "./CardListItem.module.css";
import { getTimeAgo, formatDate } from "util/time";
import noImg from "assets/noImg.png";
import starImg from "assets/Star 1.svg";

interface Props {
  link: {
    id: number,
    url: string,
    createdAt: string,
    imageSource: string,
    title: string,
    description: string,
  };
}

function CardListItem({ link } : Props) {
  return (
    <a href={link.url} target="_blank" className={style["l_col"]}  rel="noreferrer">
      <div className={style.link}>
        <div className={style["link-cover"]}>
          <img src={link.imageSource || noImg} alt="card-cover" />:
        </div>
        <button className={style["star-btn"]}>
          <img src={starImg}  alt="즐겨찾기 이미지"/>
        </button>
        <div className={style["link-contents"]}>
          <div className={style["content-Header"]}>
            <p className={style["link-update"]}>{getTimeAgo(link.createdAt)}</p>
          </div>
          <h2 className={style["link-title"]}>{link.title}</h2>
          <p className={style["link-description"]}>{link.description}</p>
          <p className={style["link-date"]}>{formatDate(link.createdAt)}</p>
        </div>
      </div>
    </a>
  );
}

export default CardListItem;
