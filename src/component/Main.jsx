import React from "react";
import ShareNav from "./ShareNav.jsx";
import CardList from "./CardList.jsx";
import SearchCard from "./SearchCard.jsx";
import "../css/Main.css";

function Main(props) {
  return (
    <>
      <ShareNav />
      <section className="mainSection">
        <SearchCard />
        <CardList />
      </section>
    </>
  );
}

export default Main;
