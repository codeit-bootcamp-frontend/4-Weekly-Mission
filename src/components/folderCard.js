import { useEffect, useState } from "react";
import fetchData from "../api/FetchData";
import { formatDate, getTimeDifference } from "../util";
import "../style/card.css";
function FolderCard({ linkToFetch }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    console.log(linkToFetch);
    const fetchCardData = async () => {
      const data = await fetchData(linkToFetch);
      if (data) {
        setItems(data.data);
      }
    };
    fetchCardData();
  }, [linkToFetch]);

  return (
    <div className="cardImg-grid">
      {items && items.length > 0 ? (
        items.map((item, id) => (
          <div className="card-container" key={id}>
            <a href={item.url}>
              <img className="cardImg" src={item.image_source} alt="img"></img>
              <p className="timeDifference">
                {getTimeDifference(item.created_at)}
              </p>
              <p className="item-description">{item.description}</p>
              <p>{formatDate(item.created_at)}</p>
            </a>
          </div>
        ))
      ) : (
        <div className="noLink">저장된 링크가 없습니다</div>
      )}
    </div>
  );
}
export default FolderCard;
