import { useEffect, useState } from "react";
import { getFolder } from "./Api";
import noImage from "../assets/noimage.jpeg";

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

function CardItem() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const getFolderData = async () => {
      try {
        const card = await getFolder();
        setCardList(card.folder.links);
      } catch (error) {
        console.log(error);
      }
    };

    getFolderData();
  }, []);

  const isListEmpty = cardList.length === 0;

  if (isListEmpty) {
    return <div>목록이 비어 있습니다.</div>;
  }

  return cardList.map((data) => (
    <a href={data.url} className="CardItem" key={data.id} target="_blank">
      <img
        className="cardImg"
        src={data.imageSource || noImage}
        alt="링크 대표 이미지"
      />
      <div className="descriptionBox">
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
  ));
}

export default CardItem;
