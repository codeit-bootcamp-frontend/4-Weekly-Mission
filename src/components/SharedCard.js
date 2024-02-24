import { getLinksFolder } from "../api";
import { useEffect, useState } from "react";
import "../css/Article.css";
import { Card } from "./Card";

function SharedCard() {
  const [linksInfo, setLinksInfo] = useState(null);

  useEffect(() => {
    const sharedLinks = async () => {
      try {
        const data = await getLinksFolder();
        setLinksInfo(data);
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };
    sharedLinks();
  }, []);

  return (
    <article>
      <ul className="article-list">
        {linksInfo &&
          linksInfo.folder.links.map((item) => (
            <li className="article-item" key={item.id}>
              <Card item={item} />
            </li>
          ))}
      </ul>
    </article>
  );
}

export default SharedCard;
