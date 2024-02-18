import "../styles/Contents.css";

import CardSection from "./CardSection";

function Contents({ folderList }) {
  return (
    <section className="section-area">
      <ul className="card-list">
        {folderList.map(({ id, createdAt, url, description, imageSource }) => (
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
