import "./css/Main.css";
import Search from "../images/Search.svg";
import emptyLogo from "../images/emptylogo.svg";

function dateDiffCalc(dateString) {
  const currentDate = new Date();
  const givenDate = new Date(dateString);
  const diffTime = Math.abs(currentDate - givenDate);
  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

  if (diffMinutes < 2) {
    return "1 minute ago";
  } else if (diffMinutes <= 59) {
    return `${diffMinutes} minutes ago`;
  } else if (diffHours < 1) {
    return "1 hour ago";
  } else if (diffHours <= 23) {
    return `${diffHours} hours ago`;
  } else if (diffDays < 1) {
    return "1 day ago";
  } else if (diffDays <= 30) {
    return `${diffDays} days ago`;
  } else if (diffMonths < 1) {
    return "1 month ago";
  } else if (diffMonths <= 11) {
    return `${diffMonths} months ago`;
  } else if (diffYears < 1) {
    return "1 year ago";
  } else {
    return `${diffYears} years ago`;
  }
}

function dateFormatter(dateString) {
  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");

  const formattedDate = `${year}.${month}.${day}`;
  return formattedDate;
}

function SearchBar() {
  return (
    <div className="searchbar-container">
      <div className="input-container">
        <img src={Search} alt="Search" />
        <input type="text" placeholder="링크를 검색해 보세요" />
      </div>
    </div>
  );
}

function Card({ card }) {
  const cardImage = card.imageSource ? card.imageSource : emptyLogo;
  const dateOfCard = new Date(card.createdAt);
  const dateDiff = dateDiffCalc(dateOfCard);
  const formatDate = dateFormatter(dateOfCard);

  const moveToUrl = () => {
    window.open(card.url, "_blank");
  };

  return (
    <div className="card-container" onClick={moveToUrl}>
      <img className="card-container-img" src={cardImage} alt="이미지"></img>
      <div className="card-container-texts">
        <div className="card-container-dateDiff">
          <div>{dateDiff}</div>
        </div>
        <div className="card-container-description">{card.description}</div>
        <div className="card-conatiner-formatDate">{formatDate}</div>
      </div>
    </div>
  );
}

function Main({ folderData }) {
  const cards = folderData && folderData.links;
  return (
    <main>
      <section>
        <SearchBar />
        <div className="cards-container">
          {cards && cards.map((card) => <Card key={card.id} card={card} />)}
        </div>
      </section>
    </main>
  );
}

export default Main;
