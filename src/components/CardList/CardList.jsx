import style from "./CardList.module.css";
import { getTimeAgo, formatDate } from "util/time";
import noImg from "assets/noImg.png";

function CardListItem({ link }) {
  return (
    <a href={link.url} target="_blank" className={style["l_col"]}>
      <div className={style.link}>
        <div className={style["link-cover"]}>
          <img src={link.imageSource || noImg} alt="card-cover" />:
        </div>
        <div className={style["link-contents"]}>
          <p className={style["link-update"]}>{getTimeAgo(link.createdAt)}</p>
          <h2 className={style["link-title"]}>{link.title}</h2>
          <p className={style["link-description"]}>{link.description}</p>
          <p className={style["link-date"]}>{formatDate(link.createdAt)}</p>
        </div>
      </div>
    </a>
  );
}

function CardList({ links }) {
  return (
    <div className={style.wrapper}>
      <ul className={style["l_row"]}>
        {/* 옵셔널 체이닝: 이걸 이용하지 않으면 새로고침시 에러가 발생한다 */}
        {links?.map((link) => (
          <CardListItem key={link.id} link={link} />
        ))}
      </ul>
    </div>
  );
}

export default CardList;
