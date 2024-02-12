import "../styles/Contents.css";
import SerachBar from "./SearchBar";
import CardSection from "./CardSection";

function Contents({ contentList }) {
  return (
    <section className="section-area">
      <div>
        <SerachBar />
      </div>
      <ul className="card-list">
        {contentList.map(({ id, createdAt, url, description, imageSource }) => (
          <li key={id} className="card-item">
            <CardSection
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

export default Contents;
