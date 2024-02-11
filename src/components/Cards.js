import "./css/Cards.css";
import Search from "../images/Search.svg";

function SearchBar() {
  return (
    <div className="searchbar-container">
      <div className="input-container">
        <img src={Search} alt="" />
        <input type="text" placeholder="링크를 검색해 보세요" />
      </div>
    </div>
  );
}

function InitialCard({ card, id }) {
  return (
    <div className="card-container" id={id}>
      <img
        className="card-container-img"
        src={card.imageSource}
        alt="이미지"
      ></img>
      <div className="card-container-texts">
        <div className="card-container-status-bar">
          <div>{card.createdAt}</div>
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
    <div className="cards-searchbar-container">
      <div className="cards-inner-container">
        <SearchBar />
        <div className="initialcard-container">
          {cards &&
            cards.map((card) => (
              <InitialCard key={card.id} card={card} id={card.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
