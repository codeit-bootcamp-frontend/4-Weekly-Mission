import "./CardsArea.css";
import searchImg from "../assets/svg/search.svg";
import CardList from "./CardList.js";
import { getFolders } from "../api/api.js";
import { useEffect, useState } from "react";

function CardsArea() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const result = await getFolders();
        const { folder } = result;
        setItems(folder.links);
      } catch (error) {
        console.error(error);
      }
    };

    handleLoad();
  }, []);

  return (
    <div className="card">
      <div className="card_inner">
        <form className="card_search_bar">
          <div className="search">
            <img src={searchImg} alt="" />
            <p>링크를 검색해 보세요.</p>
          </div>
        </form>
        <CardList items={items} />
      </div>
    </div>
  );
}

export default CardsArea;
