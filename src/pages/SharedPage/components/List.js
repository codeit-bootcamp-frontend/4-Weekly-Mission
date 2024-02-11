import React from "react";
import Card from "../../../components/Card/Card";
import styles from "./list.module.css";
import { Link } from "react-router-dom";

function List({ items }) {
  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items?.map((item) => (
          <li key={item.id}>
            {console.log(item.url)}
            <Card item={item} onClick={() => handleLinkClick(`${item.url}`)} />
            {/* <Link to={`/detail/${item.id}`} state={{ item: item }}>
              <Card item={item} onClick={handleLinkClick} />
            </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
