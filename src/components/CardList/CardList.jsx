import styles from "./cardlist.module.css";
import Card from "components/Card/Card";
import { NoResults } from "pages";

function CardList({ items, ...rest }) {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  if (!items || items.length === 0) {
    return <NoResults />;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <Card item={item} {...rest} onClick={() => handleClick(`${item.url}`)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardList;
