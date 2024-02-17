import "./CardList.css";
import noImage from "../assets/noImage.svg";
import formatDate from "../utils/formatDate.js";
import formatTimeDifference from "../utils/formatTimeDifference.js";
import star from "../assets/star.svg";
import kebab from "../assets/kebab.svg";

function CardListItem({ item }) {
  const {
    title,
    createdAt,
    created_at,
    url,
    description,
    imageSource,
    image_source,
  } = item;
  const src = (imageSource || image_source) ?? noImage;

  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={src} alt="" className="card-box-img" />
        <img src={star} alt="star" className="starIcon" />
        <div className="text-container">
          <div className="kebabWrapper">
            <p className="time-difference">
              {formatTimeDifference(createdAt || created_at)}
            </p>
            <img src={kebab} alt="kebab" className="kebabIcon" />
          </div>

          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <p className="date"> {formatDate(createdAt || created_at)}</p>
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
            <CardListItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
