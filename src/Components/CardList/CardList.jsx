import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import styles from "./css/CardList.module.css";

function CardList({ links }) {
  return (
    <section className={styles.main_contents}>
      <SearchBar />
      <div className={styles.card_list}>
        {links.map(link => (
          <Card
            id={link.id}
            createdAt={link.createdAt}
            description={link.description}
            imageSource={link.imageSource}
            title={link.title}
            url={link.url}
          />
        ))}
      </div>
    </section>
  );
}

export default CardList;
