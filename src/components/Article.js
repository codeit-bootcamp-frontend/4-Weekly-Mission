import { getLinksFolder } from "../apiItem";
import { useEffect, useState } from "react";
import { formatTime } from "./FormattTime";
import Img from "../image/snsmainimg.png";
import "../css/Article.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ArticleItem({ item }) {
  return (
    <div className="articleItem">
      <a href={item.url} target="_self">
        <img
          className="articleItem-img"
          src={item.imageSource || Img}
          alt={item.title}
        ></img>
        <div className="info">
          <p className="formatTime">{formatTime(item.createdAt)}</p>
          {/*<p className="title">{item.title}</p>*/}
          <p className="description">{item.description}</p>
          <p className="formatDate">{formatDate(item.createdAt)}</p>
        </div>
      </a>
    </div>
  );
}
function Article() {
  const [linksInfo, setLinksInfo] = useState(null);

  useEffect(() => {
    const articlehLinks = async () => {
      try {
        const data = await getLinksFolder();
        setLinksInfo(data);
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };
    articlehLinks();
  }, []);

  return (
    <article>
      <ul>
        {linksInfo &&
          linksInfo.folder.links.map((item) => (
            <li key={item.id}>
              <ArticleItem item={item} />
            </li>
          ))}
      </ul>
    </article>
  );
}

export default Article;
