import logoImg from "../../assets/images/logo.png";
import caculateTime from "../../utils/caculateTime";
import formatDate from "../../utils/formatDate";

const CardItem = ({ link }) => {
  const { createdAt, description, imageSource, title, url } = link;

  const handleClickUrl = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <div className="card" onClick={handleClickUrl}>
      {imageSource ? (
        <div className="card-img">
          <img id="img-logo" src={imageSource} alt={title} />
        </div>
      ) : (
        <div className="card-img no-img">
          <img id="no-img-logo" src={logoImg} alt="noImg" />
        </div>
      )}
      <div className="card-contents">
        <a id="card-created-time">{caculateTime(createdAt)}</a>
        <a id="card-description">{description}</a>
        <p id="card-date">{formatDate(createdAt)}</p>
      </div>
    </div>
  );
};

export default CardItem;
