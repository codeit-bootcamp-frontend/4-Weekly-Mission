import "./Cards.css";
import noCardImg from "../../assets/basic-card.png";
import elapsedTime from "../../utils/elapsedTime";

function Cards({ cardData }) {
  return (
    <div className="Cards">
      <div className="container">
        {cardData.map((link) => (
          <a href={link.url} target="_blank" className="card" key={link.id}>
            <div className="card_image_container">
              {link.imageSource ? (
                <img
                  className="card_image"
                  src={link.imageSource}
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
              <div className="createdAt">{elapsedTime(link)}</div>
              <div className="description">{link.description}</div>
              <div className="createdAt">
                {new Date(link.createdAt).toLocaleDateString()}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Cards;
