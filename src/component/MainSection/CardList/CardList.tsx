import { useState, useEffect } from "react";
import { elapsedTime } from "../../../utils/utils";
import { fetchData } from "./fetchData";
import { formatCreatedAt } from "../../../utils/utils";
import { cardDataType } from "../../../interfaces/shared.interface";
import "./CardList.css";

const CardList = () => {
  const [cardData, setCardData] = useState<cardDataType[]>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setCardData(data);
    });
  }, []);

  return (
    <div className="card-list">
      {cardData.map((data) => (
        <a
          className="card"
          key={data.id}
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="cardImg"
            style={{ backgroundImage: `url(${data.imageSource})` }}
          ></div>
          <div className="content">
            <span className="elapsed-time">{elapsedTime(data.createdAt)}</span>
            <p className="description">{data.description}</p>
            <p className="createdAt">{formatCreatedAt(data.createdAt)}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CardList;
