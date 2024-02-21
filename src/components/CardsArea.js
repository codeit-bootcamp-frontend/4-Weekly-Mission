import { useEffect, useState } from "react";
import "./CardsArea.css";
import CardList from "./CardList.js";
import { getFolders } from "../api/api.js";
import searchImg from "../assets/svg/search.svg";

// 에러처리, 로딩처리 추후 추가 예정
function CardsArea() {
  const [foldersData, setfoldersData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const loadFoldersData = async () => {
      try {
        // setIsLoading(true);
        const result = await getFolders();
        const { folder } = result;

        setfoldersData(folder.links);
        // setIsLoading(false);
      } catch (error) {
        console.error(error);
        // setError(error);
      }
    };

    loadFoldersData();
  }, []);

  return (
    <div className="card">
      <div className="card_inner">
        <form className="card_search_bar">
          <div className="search">
            <img src={searchImg} alt="돋보기" />
            <input
              className="search_bar_input"
              type="text"
              placeholder="링크를 검색해 보세요."
            ></input>
          </div>
        </form>
        <CardList items={foldersData} />
      </div>
    </div>
  );
}

export default CardsArea;
