import React from "react";
import Card from "../../../components/Card/Card";
import styles from "./list.module.css";
import { Link } from "react-router-dom";

function List({ items }) {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items?.map((item) => (
          <li key={item.id}>
            <Card item={item} onClick={() => handleClick(`${item.url}`)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
