import React from "react";
import styles from "./cardlist.module.css";
import Card from "components/Card/Card";

function CardList({ items }) {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  if (items.length === 0) {
    return <div>내용없쯤</div>;
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
