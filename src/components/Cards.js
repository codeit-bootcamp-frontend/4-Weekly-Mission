// import { useState } from "react";
// import kebabIcon from "../assets/kebab.svg";
import { getTimeAgo } from "./Utilities";
import noImage from "../assets/noimage.jpeg";
import "./styles/Card.css";

function Cards({ cardList }) {
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
    <div className="Cards">
      <div className="cardItemBox">
        {cards.map((data) => (
          <a href={data.url} className="cardItem" key={data.id} target="_blank">
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

export default Cards;
