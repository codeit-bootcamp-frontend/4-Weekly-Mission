import React from "react";
import Card from "../../../components/Card/Card";
import styles from "./list.module.css";
import { Link } from "react-router-dom";

function List({ items }) {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items?.map((item) => (
          <li key={item.id}>
            {console.log(item.url)}
            <Card item={item} onClick={() => handleLinkClick(`${item.url}`)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
