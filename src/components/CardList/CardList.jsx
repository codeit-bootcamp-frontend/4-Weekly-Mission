import React from "react";
import styles from "./cardlist.module.css";
import Card from "components/Card/Card";
import { SearchResults } from "pages";

function CardList({ items }) {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  if (items.length === 0) {
    return <SearchResults />;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <Card item={item} onClick={() => handleClick(`${item.url}`)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardList;
