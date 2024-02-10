import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import "./css/CardList.css";

function CardList({ links }) {
  return (
    <main className="main_contents">
      <SearchBar />
      <div className="card_list">
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
    </main>
  );
}

export default CardList;
