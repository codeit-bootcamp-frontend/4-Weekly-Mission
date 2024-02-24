import Img from "../image/snsmainimg.png";
import { formatTime } from "./FormattTime";
import "../css/Card.css";
import star from "../image/star.png";
import kebob from "../image/kebab.png";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

export function Card({ item }) {
  return (
    <>
      {window.location.pathname === "/shared" ? (
        <div className="cardItem">
          <a href={item.url} target="_self">
            <div className="info-img">
              <img
                className="cardItem-img"
                src={item.imageSource || Img}
                alt={item.title}
              ></img>
            </div>
            <div className="info">
              <p className="formatTime">{formatTime(item.createdAt)}</p>
              {/*<p className="title">{item.title}</p>*/}
              <p className="description">{item.description}</p>
              <p className="formatDate">{formatDate(item.createdAt)}</p>
            </div>
          </a>
        </div>
      ) : (
        <div className="cardItem">
          <a href={item.url} target="_self">
            <div className="info-img">
              <img className="star-img" src={star} alt="별모양 버튼" />
              <img
                className="cardItem-img"
                src={item.image_source || Img}
                alt={item.title}
              ></img>
            </div>
            <div className="info">
              <p className="formatTime">{formatTime(item.created_at)}</p>
              {/*<p className="title">{item.title}</p>*/}
              <p className="description">{item.description}</p>
              <p className="formatDate">{formatDate(item.created_at)}</p>
              <img className="kebob-img" src={kebob} alt="케밥 이미지" />
            </div>
          </a>
        </div>
      )}
    </>
  );
}
