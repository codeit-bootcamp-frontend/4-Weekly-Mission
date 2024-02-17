import "./CardList.css";
import "../common.css";
import card1 from "../../images/card1.png";
import { formatDate, getDaysAgo } from "../../util/DateCalculator";
import { useEffect, useState } from "react";
import { GetFolder } from "../../data-access/api";

function CardListItem({ item }) {
  let card = item.imageSource;
  const href = item.url;
  if (!card) {
    card = card1;
  }
  return (
    <a
      href={href}
      className="card flex flex-col"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        key={card}
        className="card-image"
        style={{ backgroundImage: `url(${card})` }}
      />

      <div className="card-content">
        <p>{getDaysAgo(item.createdAt)}</p>
        <h2>{item.title}</h2>
        <p>{formatDate(item.createdAt)}</p>
      </div>
    </a>
  );
}

function CardList() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const GetMyFolder = async () => {
      const result = await GetFolder();
      const { folder } = result;
      const { links } = folder;
      setLinks(links);
    };
    try {
      GetMyFolder();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <ul>
      {links.map((item, i) => {
        return (
          <li key={item.id}>
            <CardListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
export default CardList;
