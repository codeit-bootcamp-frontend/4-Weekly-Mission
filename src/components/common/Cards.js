import { useEffect, useState } from "react";
import noImg from "../../images/no-img.png";
import "./Card.css";
import { getFolder } from "../../api";

function Card() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
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

    const formatTimeAgo = (createdAt) => {
      const now = new Date();
      const createdDate = new Date(createdAt);
      const diffTime = now - createdDate;
      const minute = Math.floor(diffTime / (1000 * 60));
      const hour = Math.floor(minute / 60);
      const day = Math.floor(minute / (60 * 24));
      const month = Math.floor(minute / (60 * 24 * 30));
      const years = Math.floor(minute / (60 * 24 * 30 * 12));

      if (minute < 2) return "1 minute ago";
      if (minute <= 59) return `${minute} ${"minutes ago"}`;
      if (minute < 60 * 24)
        return hour === 1 ? "1 hour ago" : `${hour} ${"hours ago"}`;
      if (minute < 60 * 24 * 30)
        return day === 1 ? "1 day ago" : `${day} ${"days ago"}`;
      if (minute < 60 * 24 * 30 * 12)
        return month === 1 ? "1 month ago" : `${month} ${"months ago"}`;
      if (years === 1) return "1 year ago";
      return `${years} ${"years ago"}`;
    };

    const uploadedDate = (createdAt) => {
      const createdDate = new Date(createdAt);
      const year = createdDate.getFullYear();
      const month = (1 + createdDate.getMonth()).toString().padStart(2, "0");
      const day = createdDate.getDate().toString().padStart(2, "0");
      return `${year}. ${month}. ${day}`;
    };

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
