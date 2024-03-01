import CardListItem from "./CardListItem";
import "./CardList.css";

function CardList({ items }) {
  return (
    <ul className="card_list">
      {items.map((item) => (
        <CardListItem item={item} key={item.id}>
          <li />
        </CardListItem>
      ))}
    </ul>
  );
}

export default CardList;
