import { formatDate, getDaysAgo } from "../../util/DateCalculator";
import card from "../../images/linkbrary-card.png";
import star from "../../images/star.png";
import kebab from "../../images/kebab.png";
import { useState } from "react";

function LinkListItem({ linkData }) {
  const [kebabOn, setKebabOn] = useState(false);
  const url = linkData.url;
  let image = linkData.image_source;
  if (!image) {
    image = card;
  }
  const handleKebabIn = (e) => {
    e.preventDefault();
    setKebabOn(true);
  };
  const handleKebabOut = () => {
    setKebabOn(false);
  };
  return (
    <a
      href={url}
      className="card flex flex-col"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        key={image}
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <button className="star">
          <img src={star} />
        </button>
      </div>
      <div className="card-content">
        <div onClick={handleKebabIn} onBlur={handleKebabOut}>
          <button className="kebab">
            <img src={kebab} />
          </button>
          {kebabOn ? (
            <div className="kebab-menus">
              <button className="kebab-menu">삭제하기</button>
              <button className="kebab-menu">폴더에 추가</button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <p>{getDaysAgo(linkData.created_at)}</p>
        <h2>{linkData.title}</h2>
        <p>{formatDate(linkData.created_at)}</p>
      </div>
    </a>
  );
}

function LinkList({ linksData }) {
  return (
    <div className="link-list">
      {linksData.map((data) => {
        return <LinkListItem key={data.id} linkData={data} />;
      })}
    </div>
  );
}

export default LinkList;
