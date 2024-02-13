import CardListItem from "components/CardListItem/CardListItem";
import style from "./CardList.module.css";

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
