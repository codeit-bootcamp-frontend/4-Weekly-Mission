import { useState, useEffect } from "react";
import "./CardList.css";
import Card from "./Card";
import { getFolderInfo } from "../../services/api";

function CardList() {
  // links를 배열에 순차적으로 저장
  const [links, setLinks] = useState([]);

  const fetchFolderInfo = async () => {
    try {
      const { folder } = await getFolderInfo();
      setLinks(folder.links);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchFolderInfo();
  }, []);

  return (
    <div className="card-list grid width-full">
      {links.map((link) => (
        <Card
          createdAt={link.createdAt}
          url={link.url}
          title={link.title}
          description={link.description}
          imageSource={link.imageSource}
        />
      ))}
    </div>
  );
}

export default CardList;
