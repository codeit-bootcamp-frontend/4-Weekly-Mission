import searchIcon from "../assets/Search.svg";
import "./CardSection.css";

export default function CardSection() {
  return (
    <div className="CardSection">
      <div className="cardFrame">
        <div className="searchBar">
          <div className="searchBarElement">
            <img id="searchIcon" src={searchIcon} alt="검색 아이콘"></img>
            <input id="inputText" placeholder="링크를 검색해보세요."></input>
          </div>
        </div>
      </div>
    </div>
  );
}
