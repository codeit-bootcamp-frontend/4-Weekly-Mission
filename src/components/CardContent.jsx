import style from "../styles/CardContent.module.css";

// CardContent -> 설명 표시되는 부분(card.description 활용)
function CardContent({ description }) {
  return <span className={style.card_content}>{description}</span>;
}

export default CardContent;
