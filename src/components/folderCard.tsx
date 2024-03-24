import React from "react";
import { useEffect, useState } from "react";
import fetchData from "../api/FetchData";
import { formatDate, getTimeDifference } from "../util";
import "../style/card.css";
import starImg from "../assets/star.png";
import kebabImg from "../assets/kebab.png";
function FolderCard({ linkToFetch }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    console.log(linkToFetch);
    const fetchCardData = async () => {
      const data = await fetchData(linkToFetch);
      if (data) {
        setItems(data.data);
      }
    };
    fetchCardData();
  }, [linkToFetch]);

  return (
    <div className="cardImg-grid">
      {items && items.length > 0 ? (
        items.map((item, id) => (
          <div className="card-container" key={id}>
            <div className="cardImg-container">
              <img
                className="cardFavoriteImg"
                src={starImg}
                alt="cardFavoriteImg"
              />
              <img className="cardImg" src={item.image_source} alt="img" />
            </div>
            <a href={item.url}>
              <div className="cardScript">
                <div>
                  <p className="timeDifference">
                    {getTimeDifference(item.created_at)}
                  </p>
                  <img src={kebabImg} alt="kebabImg" />
                </div>
                <p className="item-description">{item.description}</p>
                <p>{formatDate(item.created_at)}</p>
              </div>
            </a>
          </div>
        ))
      ) : (
        <div className="noLink">저장된 링크가 없습니다</div>
      )}
    </div>
  );
}
export default FolderCard;
