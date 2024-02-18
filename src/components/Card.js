import { useEffect, useState } from "react";
import "../style/card.css";
import { formatDate, getTimeDifference } from "../util";
function Card() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder",
        );
        const data = await response.json();
        if (response.ok) {
          setItems(data.folder.links);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="main-container">      
      <div className="cardImg-grid">
        {items &&
          items.map((item, index) => (
            <div className="card-container" key={index}>
              <a href={item.url}>
                <img className="cardImg" src={item.imageSource} alt="img"></img>
                <div className="cardInfo">
                  <p className="timeDifference">
                    {getTimeDifference(item.createdAt)}
                  </p>
                  <p className="item-description">{item.description}</p>
                  <p>{formatDate(item.createdAt)}</p>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Card;
