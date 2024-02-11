import "./CardList.css";
import "./common.css";
import card1 from "../images/card1.png";

function getDaysAgo(value) {
  const date = new Date(value);
  const timeStampDate = date.getTime();
  const today = Date.now();
  if ((today - timeStampDate) / 1000 / 60 < 2) {
    return "1 minute ago";
  }
  if ((today - timeStampDate) / 1000 / 60 <= 59) {
    return `${Math.floor((today - timeStampDate) / 1000 / 60)} minutes ago`;
  }
  if ((today - timeStampDate) / 1000 / 60 / 60 < 2) {
    return "1 hour ago";
  }
  if ((today - timeStampDate) / 1000 / 60 / 60 < 24) {
    return `${Math.floor((today - timeStampDate) / 1000 / 60 / 60)} hours ago`;
  }
  if ((today - timeStampDate) / 1000 / 60 / 60 < 48) {
    return "1 day ago";
  }
  if ((today - timeStampDate) / 1000 / 60 / 60 / 24 <= 30) {
    return `${Math.floor(
      (today - timeStampDate) / 1000 / 60 / 60 / 24
    )} days ago`;
  }
  if ((today - timeStampDate) / 1000 / 60 / 60 / 24 < 61) {
    return `1 month ago`;
  }
  if ((today - timeStampDate) / 1000 / 60 / 60 / 24 / 31 < 12) {
    return `${Math.floor(
      (today - timeStampDate) / 1000 / 60 / 60 / 24 / 31
    )} months ago`;
  }
  if ((today - timeStampDate) / 1000 / 60 / 60 / 24 / 365 < 2) {
    return `1 year ago`;
  }
  return `${Math.floor(
    (today - timeStampDate) / 1000 / 60 / 60 / 24 / 365
  )} years ago`;
}

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function CardListItem({ item, card, href }) {
  if (!card) {
    card = card1;
  }
  return (
    <a href={href} className="card flex flex-col" target="_blank">
      <img key={card} className="card-image" src={card} />
      <div className="card-content">
        <p>{getDaysAgo(item.createdAt)}</p>
        <h2>{item.title}</h2>
        <p>{formatDate(item.createdAt)}</p>
      </div>
    </a>
  );
}

function CardList({ links }) {
  return (
    <ul>
      {links.map((item, i) => {
        return (
          <li key={item.id}>
            <CardListItem item={item} card={item.imageSource} href={item.url} />
          </li>
        );
      })}
    </ul>
  );
}
export default CardList;
