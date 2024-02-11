import React from "react";
import ShareNav from "./ShareNav.jsx";
import CardList from "./CardList.jsx";
import SearchCard from "./SearchCard.jsx";

function Main(props) {
  return (
    <>
      <ShareNav />
      <section>
        <SearchCard />
        <CardList />
      </section>
    </>
  );
}

export default Main;
