import "./Cards.css";
import noCardImg from "../../assets/basic-card.png";

function Cards({ cardData }) {
  // 시간 차 구하기
  const ElapsedTime = (elem) => {
    const createdTime = new Date(elem.createdAt);
    const currentTime = new Date();
    const timeDiff = Math.floor((currentTime - createdTime) / 1000 / 60);

    if (timeDiff < 2) return "1 minute ago";
    else if (timeDiff <= 59) return `${timeDiff} minutes ago`;
    else if (timeDiff <= 60 * 23)
      return `${Math.floor(timeDiff / 60)} hours ago`;
    else if (timeDiff <= 60 * 24 * 30)
      return `${Math.floor(timeDiff / 24 / 60)} days ago`;
    else if (timeDiff < 60 * 24 * 365)
      return `${Math.floor(timeDiff / 30 / 24 / 60)} months ago`;
    else return `${Math.floor(timeDiff / 30 / 24 / 60 / 12)} years ago`;
  };

  // 출력
  return (
    <div className="Cards">
      <div className="container">
        {cardData.map((elem) => (
          <a href={elem.url} target="_blank" className="card" key={elem.id}>
            <div className="card_image_container">
              {elem.imageSource ? (
                <img
                  className="card_image"
                  src={elem.imageSource}
                  alt="card image"
                />
              ) : (
                <img
                  className="card_image"
                  src={noCardImg}
                  alt="no card image"
                />
              )}
            </div>
            <div className="card_information">
              <div className="createdAt">{ElapsedTime(elem)}</div>
              <div className="description">{elem.description}</div>
              <div className="createdAt">
                {new Date(elem.createdAt).toLocaleDateString()}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Cards;
