import { useEffect, useState } from "react";
import { getLinksUserIdLinks } from "../api";
import "../css/Article.css";
import { Card } from "./Card";

function LinkItem({ folderId }) {
  const [links, setLinks] = useState({ data: [] });

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const linksData = await getLinksUserIdLinks(folderId);
        setLinks(linksData);
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };

    fetchLinks();
  }, [folderId]);

  return (
    <article>
      {links.data.length > 0 ? (
        <ul className="article-list">
          {links.data.map((item) => (
            <li className="article-item" key={item.id}>
              <Card item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-links">저장된 링크가 없습니다.</p>
      )}
    </article>
  );
}

export default LinkItem;
