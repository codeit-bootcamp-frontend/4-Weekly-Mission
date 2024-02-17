import "../assets/styles/CardList.css";
import logoImg from "../assets/images/logo.png";

const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

const caculateTime = (value) => {
  const createdDate = new Date(value);
  const nowDate = new Date();
  const timeDiff = nowDate - createdDate;

  const minDiff = Math.floor(timeDiff / 1000 / 60);
  const hourDiff = Math.floor(minDiff / 60);
  const dayDiff = Math.floor(hourDiff / 24);
  const monthDiff = Math.floor(dayDiff / 31);
  if (monthDiff >= 12) {
    return `${Math.floor(monthDiff / 12)} years ago`;
  } else if (monthDiff >= 1) {
    return `${monthDiff} months ago`;
  } else if (dayDiff >= 1) {
    return `${dayDiff} days ago`;
  } else if (hourDiff >= 1) {
    return `${hourDiff} hours ago`;
  } else if (minDiff >= 2) {
    return `${minDiff} minutes ago`;
  } else {
    return "1 minute ago";
  }
};

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

const CardList = ({ links }) => {
  return (
    <main>
      {links.length ? (
        <div className="cardList">
          <div className="cardList-container">
            {links.map((item) => (
              <CardItem key={item.id} link={item} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className="fail-data">폴더 데이터를 가져오지 못했습니다.</h1>
      )}
    </main>
  );
};
export default CardList;
