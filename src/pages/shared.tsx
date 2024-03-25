import React, { useState } from "react";
import Nav from "../components/Common/Nav";
import HeaderFolder from "../components/HeaderFolder";
import Footer from "../components/Common/Footer";
import Search from "../components/Search/Search";
import CardGrid from "../components/CardGrid/Cardgrid";
import useCardData from "../components/CardGrid/Utils/useCardData";
import "./shared.scss";
import { LinkData } from "../types/interface";

const Shared = () => {
  const [folderLinkList, setFolderLinkList] = useState<LinkData[]>([]);
  const { formattedCards } = useCardData();
  const [searchText, setSearchText] = useState(""); // 검색어 상태 추가

  // 검색어 변경 핸들러
  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <>
      <Nav sticky={true} />
      <header>
        <div className="header-content">
          <HeaderFolder />
        </div>
      </header>
      <main className="shared">
        <Search
          folderLinkList={folderLinkList}
          setFilteredLinks={setFolderLinkList}
          onSearch={handleSearch}
        />
        <CardGrid formattedCards={formattedCards} searchText={searchText} />
      </main>
      <Footer />
    </>
  );
};

export default Shared;
