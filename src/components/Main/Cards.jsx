import SearchBar from "./SearchBar.jsx";
import "./Cards.css";
import CardList from "./CardList.jsx";

function Cards({ folder }) {
  return (
    <div className="Cards">
      <SearchBar className="Cards-SearchBar" />
      <CardList folder={folder} />
    </div>
  );
}

export default Cards;
