import "./css/Main.css";
import Search from "../images/Search.svg";
import Card from "./Card";

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
