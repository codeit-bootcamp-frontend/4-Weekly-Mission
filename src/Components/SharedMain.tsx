import searchIcon from "../images/search.svg";
import { Card } from "./Card";
import { CardLinks } from "~/useHooks/useSampleFolder";
import closeIcon from "../images/close.svg";
import { useState } from "react";

export function SharedMain({ cards }: { cards: CardLinks[] }) {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInputValue = () => {
    setSearchInput("");
  };

  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const lowerQuery = searchInput.toLowerCase();
  const filteredLinks = cards.filter(
    (card) =>
      card.url?.toLowerCase().includes(lowerQuery) ||
      card.title?.toLowerCase().includes(lowerQuery) ||
      card.description?.toLowerCase().includes(lowerQuery)
  );
  const linkArray = filteredLinks ? filteredLinks : cards;

  return (
    <>
      <div className="mainArea">
        <form className="searchArea">
          <input
            className="searchInput"
            placeholder="링크를 검색해 보세요."
            value={searchInput}
            onChange={handleSearchData}
          ></input>
          <img src={searchIcon} alt="search" className="searchImg"></img>
          <img
            src={closeIcon}
            alt="close"
            className="closeImg"
            onClick={handleInputValue}
          ></img>
        </form>

        <div className="cardGrid">
          {linkArray &&
            linkArray.map((card) => (
              <Card key={card.id} cardInfo={card}></Card>
            ))}
        </div>
      </div>
    </>
  );
}
