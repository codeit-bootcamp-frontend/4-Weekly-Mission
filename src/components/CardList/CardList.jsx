import style from "./CardList.module.css";

function CardList({ items }) {
  console.log(items);
  return <div className={style.wrapper}>CardList</div>;
}

export default CardList;
