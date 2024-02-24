import { useEffect, useState } from "react";
import noImg from "../../images/no-img.png";
import "./Card.css";
import { getFolder } from "../../api";
import { formatTimeAgo, uploadedDate } from "../formatTime";

function Card() {
  const [cardData, setCardData] = useState([]);
  const fetchCardData = async () => {
    try {
      const jsonData = await getFolder();
      const links = jsonData.folder.links.map((link) => ({
        ...link,
        cardTime: formatTimeAgo(link.createdAt),
        cardDay: uploadedDate(link.createdAt),
      }));

      setCardData(links);
    } catch (error) {
      console.error("Error data:", error);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <div className="card-grid">
      {cardData.map(
        ({ url, imageSource, cardTime, description, cardDay }, index) => (
          <a href={url} className="card" key={index}>
            <img
              className="card-img"
              src={imageSource ? imageSource : noImg}
              alt="card"
            />
            <div className="card-info">
              <div className="card-time"> {cardTime} </div>
              <p className="card-text">{description}</p>
              <div className="card-day">{cardDay} </div>
            </div>
          </a>
        )
      )}
    </div>
  );
}

export default Card;
