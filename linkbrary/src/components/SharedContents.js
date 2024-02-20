import "../styles/Contents.css";
import SEARCH from "../assets/search.svg";
import SharedCardSection from "./SharedCardSection";

function SharedContents({ folderList }) {
  return (
    <section className="section-area">
      <div className="search-bar-group">
        <img src={SEARCH} alt="돋보기 아이콘" className="icon-search" />
        <input
          type="text"
          className="input-search"
          placeholder="링크를 검색해 보세요."
        />
      </div>
      <ul className="card-list">
        {folderList.map(({ id, createdAt, url, description, imageSource }) => (
          <li key={id} className="card-item">
            <SharedCardSection
              url={url}
              createdAt={createdAt}
              desc={description}
              imgUrl={imageSource}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SharedContents;
