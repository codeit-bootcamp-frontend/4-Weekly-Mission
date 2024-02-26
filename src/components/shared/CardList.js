import "./CardList.css";
import "../common.css";
import card1 from "../../images/card1.png";
import { formatDate, getDaysAgo } from "../../util/date-calculator";
import { useEffect, useState } from "react";
import { GetFolder } from "../../api/api";

function CardListItem({ item }) {
  const href = item.url;

  return (
    <a
      href={href}
      className="card flex flex-col"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        key={item.imageSource || card1}
        className="card-image"
        style={{ backgroundImage: `url(${item.imageSource || card1})` }}
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
      const {
        folder: { links },
      } = await GetFolder();
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
