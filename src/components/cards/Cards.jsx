import "./Cards.css";
import noCardImg from "../../assets/basic-card.png";
import elapsedTime from "../../utils/elapsedTime";

function Cards({ cards }) {
  return (
    <div className="Cards">
      <div className="container">
        {cards ? (
          cards.map((card) => (
            <a
              href={card.url}
              target="_blank"
              rel="noreferrer noopener"
              className="card"
              key={card.id}
            >
              <div className="card_image_container">
                <img
                  className="card_image"
                  src={(card.imageSource || card["image_source"]) ?? noCardImg}
                  alt={
                    card.imageSource || card["image_source"]
                      ? "card image"
                      : "no card image"
                  }
                />
              </div>
              <div className="card_information">
                <div className="createdAt">{elapsedTime(card)}</div>
                <div className="description">{card.description}</div>
                <div className="createdAt">
                  {new Date(
                    card.createdAt || card.created_at
                  ).toLocaleDateString()}
                </div>
              </div>
            </a>
          ))
        ) : (
          <p className="no_link_msg">저장된 링크가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default Cards;
