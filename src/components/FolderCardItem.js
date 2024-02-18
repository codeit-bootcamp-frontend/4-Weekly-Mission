import logoImg from "../assets/images/logo.png";
import caculateTime from "../utils/caculateTime";
import formatDate from "../utils/formatDate";
import starIcon from "../assets/icons/star.svg";
import kebabIcon from "../assets/icons/kebab.svg";
import "../assets/styles/FolderCardItem.css";

const FolderCardItem = ({ link }) => {
  const { created_at, description, image_source, title, url } = link;

  const handleClickUrl = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <div className="card" onClick={handleClickUrl}>
      <img className="star-icon" src={starIcon} alt="star-icon" />
      {image_source ? (
        <div className="card-img">
          <img id="img-logo" src={image_source} alt={title} />
        </div>
      ) : (
        <div className="card-img no-img">
          <img id="no-img-logo" src={logoImg} alt="noImg" />
        </div>
      )}
      <div className="card-contents">
        <img className="kebab-icon" src={kebabIcon} alt="kebab-icon" />
        <a id="card-created-time">{caculateTime(created_at)}</a>
        <a id="card-description">{description}</a>
        <p id="card-date">{formatDate(created_at)}</p>
      </div>
    </div>
  );
};

export default FolderCardItem;
