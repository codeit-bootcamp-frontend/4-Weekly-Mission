import React, { useEffect, useState } from "react";
import { getFolder, getUser } from "../api";

// components
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import CardList from "../components/shared/CardList";
import SearchBar from "../components/common/searchBar/SearchBar";
import SharedInfo from "../components/shared/SharedInfo";

// style
import "../pages/Shared.css";

const Shared = () => {
  return (
    <div className="Shared">
      <Header />
      <div className="Shared-main">
        <SharedInfo />
        <div className="Shared-content-wrapper">
          <SearchBar />
          <button className="Shared-sort-newest-btn">최신순</button>
          <button className="Shared-sort-id-btn">아이디순</button>
          <CardList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shared;
