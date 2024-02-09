import "./css/Cards.css";

function InitialCard({ card }) {
  return (
    <div className="card-container">
      <img className="card-container-img" src={card.imageSource}></img>
      <div className="card-container-texts">
        <div className="card-container-status-bar">
          <div>{card.createdAt}</div>
          <div>```</div>
        </div>
        <div className="card-container-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
          mollitia.
        </div>
        <div>{card.createdAt}</div>
      </div>
    </div>
  );
}

function Cards({ folderData }) {
  const cards = folderData && folderData.links;
  console.log(cards);
  return (
    <>
      {cards &&
        cards.map((card) => (
          <div key={card.id}>
            <InitialCard card={card} />
          </div>
        ))}
    </>
  );
}

export default Cards;
