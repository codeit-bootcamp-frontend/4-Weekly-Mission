import ErrorImage from "../../image/image1.png";

function FolderLink({ links }) {
  function time(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    if (minutes < 2) {
      return "1 minute ago";
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 2) {
      return "1 hour ago";
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days < 2) {
      return "1 day ago";
    } else if (days < 30) {
      return `${days} days ago`;
    } else if (months < 2) {
      return "1 month ago";
    } else if (months < 12) {
      return `${months} months ago`;
    } else if (years < 2) {
      return "1 year ago";
    } else {
      return `${years} years ago`;
    }
  }
  return (
    <>
      <div className="listTitle">
        <a>유용한 글</a>
        <div calssName="listButton">
          <button>공유</button>
          <button>이름변경</button>
          <button>삭제</button>
        </div>
      </div>
      <div className="cardList">
        {links &&
          links.map((card) => (
            <a href={card.url} className="card" key={card.id}>
              <div>
                <img
                  className="CardImg"
                  src={card.imageSource || ErrorImage}
                  alt={card.title}
                />
              </div>
              <div className="CardInfo">
                <p className="time">{time(card.createdAt)}</p>
                <p className="title">{card.title}</p>
                {/* <p className="date">{card.description}</p> */}
              </div>
            </a>
          ))}
      </div>
    </>
  );
}

export default FolderLink;
