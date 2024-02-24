import style from "./CardListItem.module.css";
import { getTimeAgo, formatDate } from "util/time";
import noImg from "assets/noImg.png";
import starImg from "assets/Star 1.svg";
import kebabImg from "assets/kebab.svg";
import { useState } from "react";

function CardListItem({ link }) {
  const [btnClicked, setBtnClicked] = useState(false);
  const handleKebabBtnClick = (e) => {
    setBtnClicked(true);
  };

  return (
    <a href={link.url} target="_blank" className={style["l_col"]}>
      <div className={style.link}>
        <div className={style["link-cover"]}>
          <img src={link.imageSource || noImg} alt="card-cover" />:
        </div>
        <button className={style["star-btn"]}>
          <img src={starImg} />
        </button>
        <div className={style["link-contents"]}>
          <div className={style["content-Header"]}>
            <p className={style["link-update"]}>{getTimeAgo(link.createdAt)}</p>
            <button
              className={style["kebab-btn"]}
              onClick={handleKebabBtnClick}
            >
              <img src={kebabImg} />
            </button>
            <ul>
              <li>삭제하기</li>
              <li>폴더에추가</li>
            </ul>
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
