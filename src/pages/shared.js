import React from "react";
import Nav from "../components/Common/Nav";
import HeaderFolder from "../components/HeaderFolder";
import Footer from "../components/Common/Footer";
import Search from "../components/Search/Search";
import CardGrid from "../components/CardGrid/Cardgrid";
import useCardData from "../components/CardGrid/Utils/useCardData";
import "./shared.scss";

const Shared = () => {
  const { formattedCards } = useCardData();

  return (
    <>
      <Nav />
      <header>
        <div className="header-content">
          <HeaderFolder />
        </div>
      </header>
      <main>
        <Search />
        <CardGrid formattedCards={formattedCards} />
      </main>
      <Footer />
    </>
  );
};

export default Shared;
