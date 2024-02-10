import "./FolderLinks.css";

import Card from "../Card/Card";

const FolderLinks = ({ links }) => {
  return (
    <div className="FolderLinks">
      <ul className="FolderLinks__list">
        {links.map((item) => {
          const { id, createdAt, url, title, description, imageSource } = item;
          return (
            <li key={id} className="FolderLinks__item">
              <a href={url} target="_blank" rel="noreferrer">
                <Card {...item} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FolderLinks;
