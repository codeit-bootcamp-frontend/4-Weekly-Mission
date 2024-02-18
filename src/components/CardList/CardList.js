import CardListItem from "components/CardListItem/CardListItem";
import styles from "./CardList.module.css";

function CardList({ links }) {
  return (
    <div className={styles["card-container"]}>
      <ul className={styles["grid"]}>
        {links &&
          links.map((link) => <CardListItem key={link.id} link={link} />)}
      </ul>
    </div>
  );
}

export default CardList;
