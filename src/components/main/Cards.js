import "./Cards.css";
import noCardImg from "../../assets/basic-card.png";
import elapsedTime from "../../utils/elapsedTime";

function Cards({ cards }) {
  return (
    <div className="Cards">
      <div className="container">
        {cards.map((link) => (
          <a href={link.url} target="_blank" className="card" key={link.id}>
            <div className="card_image_container">
              <img
                className="card_image"
                src={link.imageSource ?? noCardImg}
                alt={link.imageSource ? "card image" : "no card image"}
              />
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
