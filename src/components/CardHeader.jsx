import timeSince from "./Utils";
import style from "../styles/CardHeader.module.css";

// CardHeader -> ~ago 표시되는 부분(card.createdAt 활용) + Utils.js의 timeSince 활용
function CardHeader({ createdAt }) {
  return <span className={style.card_header}>{timeSince(createdAt)}</span>;
}

export default CardHeader;
