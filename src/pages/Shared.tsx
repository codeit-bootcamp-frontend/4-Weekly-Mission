import Navbar from "../components/Navbar";
import Favorites from "../components/shared/Favorites";
import LinkSearch from "../components/LinkSearch";
import CardList from "../components/shared/CardList";
import Footer from "../components/Footer";
import "./Main.css";
import { useState } from "react";

function Shared() {
  const [sharedKeywords, setSharedKeywords] = useState("");
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Favorites />
      </div>
      <div className="link-search-card-list">
        <LinkSearch setKeywords={setSharedKeywords} />
        <CardList />
      </div>
      <Footer />
    </>
  );
}

export default Shared;
