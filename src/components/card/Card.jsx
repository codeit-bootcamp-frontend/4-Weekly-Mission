import "./Card.css";
import noImg from "../../imgs/noImg.svg";
import { getAgoString } from "../../utils/convertTime";

function Card({ description, imageSource, createdAt, url }) {
  const handleCardClick = () => {
    window.open(url, "_blank"); // URL을 새 창으로 열기
  };

  const formattedDate = new Date(createdAt).toLocaleDateString("ko-KR");

  // createdAt 데이터를 기준으로 ago 문자열을 생성
  const agoString = getAgoString(createdAt);

  return (
    <li className="card" onClick={handleCardClick}>
      <div className="cardbox">
        <img className="card--img" src={imageSource || noImg} alt="cardImg" />
      </div>
      <div className="card--content">
        <p className="card--content__agotime">{agoString}</p>
        <p className="card--content__description">{description}</p>
        <p className="card--content__date">{formattedDate}</p>
      </div>
    </li>
  );
}

export default Card;
