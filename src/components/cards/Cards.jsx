import Card from "../Card/Card";
import "./Cards.css";

function Cards({ cards, changeLinkDeleteSelect, changeFolderAddSelect }) {
  return (
    <div className="Cards">
      <div className="container">
        {cards ? (
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              changeLinkDeleteSelect={changeLinkDeleteSelect}
              changeFolderAddSelect={changeFolderAddSelect}
            />
          ))
        ) : (
          <p className="no_link_msg">저장된 링크가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default Cards;
