import React from "react";
import Navigation from "../component/Navigation/Navigation";
import Footer from "../component/Footer/Footer";
import FolderSection from "../component/MainSection/FolderSection/FolderSection";
import SearchBar from "../component/MainSection/SearchBar/SearchBar";
import CardList from "../component/MainSection/CardList/CardList";
import "./page.css";

const Shared = () => {
  return (
    <>
      <Navigation />
      <section className="main-section">
        <FolderSection />
        <div className="wrap">
          <SearchBar />
          <CardList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shared;
