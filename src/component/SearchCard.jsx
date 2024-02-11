import React from "react";
import search from "../imgs/search.svg";
import "../css/SearchCard.css";

function SearchCard(props) {
  return (
    <section className="searchSection">
      <div className="searchBox">
        <img className="sarchBox--img" src={search} alt="searchimg"></img>
        <p className="searchBox--text">링크를 검색해 보세요.</p>
      </div>
    </section>
  );
}

export default SearchCard;
