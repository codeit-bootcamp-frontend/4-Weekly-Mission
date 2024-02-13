import SearchBar from "./SearchBar.js";
import "./Cards.css";
import CardList from "./CardList.js";

function Cards({ folder }) {
  return (
    <div className="Cards">
      <SearchBar className="Cards-SearchBar" />
      <CardList folder={folder} />
    </div>
  );
}

export default Cards;
