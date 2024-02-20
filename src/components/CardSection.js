import searchIcon from "../assets/Search.svg";
import CardList from "./CardList";
import "./CardSection.css";

export default function CardSection({ cardList }) {
  return (
    <div className="cardSection">
      <div className="cardFrame">
        <div className="searchBar">
          <div className="searchBarElement">
            <img id="searchIcon" src={searchIcon} alt="검색 아이콘" />
            <input
              type="text"
              id="inputText"
              placeholder="링크를 검색해보세요."
            />
          </div>
        </div>
        <ul className="card-list">
          {cardList.map(({ id, createdAt, url, description, imageSource }) => {
            return (
              <li key={id} className="card-item">
                <CardList
                  url={url}
                  createdAt={createdAt}
                  desc={description}
                  imgUrl={imageSource}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
