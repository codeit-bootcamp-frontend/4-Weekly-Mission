import { useEffect, useState } from "react";
import noImg from "../../images/no-img.png";
import "./Card.css";
import { getFolder } from "../../api";
import { formatTimeAgo, uploadedDate } from "../formatTime";
import kebab from "../../images/kebab.svg";
import starOff from "../../images/star_off.svg";

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
          //fixme: key값 id값으로 고치기
          <div className="card">
            <a href={url} key={index}>
              <img
                className="card-img"
                src={imageSource ? imageSource : noImg}
                alt="card"
              />
            </a>
            <img className="btn-star" src={starOff}></img>
            <div className="card-info">
              <div className="card-time">
                <div> {cardTime} </div>
                <a>
                  <img src={kebab}></img>
                </a>
              </div>
              <p className="card-text">{description}</p>
              <div className="card-day">{cardDay} </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Card;
