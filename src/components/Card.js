// import { useState } from "react";
// import kebabIcon from "../assets/kebab.svg";
import noImage from "../assets/noimage.jpeg";
import "./styles/Card.css";

function getTimeAgo(createdAt) {
  const now = new Date();
  const createdDate = new Date(createdAt);

  const timeDiff = now - createdDate;
  const minutes = Math.floor(timeDiff / (1000 * 60));
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

  if (minutes < 2) {
    return "1 minute ago";
  } else if (minutes <= 59) {
    return `${minutes} minutes ago`;
  } else if (hours < 1) {
    return "1 hour ago";
  } else if (hours <= 23) {
    return `${hours} hours ago`;
  } else if (days < 1) {
    return "1 day ago";
  } else if (days <= 30) {
    return `${days} days ago`;
  } else if (months < 1) {
    return "1 month ago";
  } else if (months <= 11) {
    return `${months} months ago`;
  } else if (years < 1) {
    return "1 year ago";
  } else {
    const roundedYears = Math.floor(months / 12);
    return `${roundedYears} years ago`;
  }
}

function Card({ cardList }) {
  const isListEmpty = cardList.length === 0;

  // const [kebabClick, setKebabClick] = useState(false);

  if (isListEmpty) {
    return (
      <div className="noLink">
        <p>저장된 링크가 없습니다</p>
      </div>
    );
  }

  const cards = cardList.map((card) => ({
    imageSource: card.imageSource || card.image_source,
    createdAt: card.createdAt || card.created_at,
    ...card,
  }));

  // const handleButtonClick = () => {
  //   setKebabClick(!kebabClick);
  // };

  return (
    <div className="Card">
      <div className="cardItemBox">
        {cards.map((data) => (
          <a href={data.url} className="CardItem" key={data.id} target="_blank">
            <img
              className="cardImg"
              src={data.imageSource || noImage}
              alt="링크 대표 이미지"
            />
            <div className="descriptionBox">
              {/* <button className="kebabBtn" onClick={handleButtonClick}>
                <img src={kebabIcon} alt="케밥..?" />
              </button>
              {kebabClick && (
                <div>
                  <button>삭제하기</button>
                  <button>폴더에 추가</button>
                </div>
              )} */}
              <p className="cardTime">{getTimeAgo(data.createdAt)}</p>
              <p className="description">
                {data.title}
                <br />
                {data.description}
              </p>
              <p className="cardDate">
                {new Date(data.createdAt).toLocaleDateString()}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Card;
