import "./CardList.css";
import star from "../assets/star.svg";
import kebab from "../assets/kebab.svg";
import useTransformData from "../hooks/useTransformData.js";

function Card({ item }) {
  const { title, url, description, src, timeDifference, formattedDate } =
    useTransformData(item);

  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={src} alt="" className="card-box-img" />
        <img src={star} alt="star" className="starIcon" />
        <div className="text-container">
          <div className="kebabWrapper">
            <p className="time-difference">{timeDifference}</p>
            <img src={kebab} alt="kebab" className="kebabIcon" />
          </div>
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <p className="date"> {formattedDate}</p>
        </div>
      </a>
    </div>
  );
}

function CardList({ items }) {
  return (
    <div className="card-container-center">
      <div className="card-container">
        {items.map((item) => (
          <div key={item.id} className="card-box">
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
