import { convertTime, formatDate } from "../../utils/convertTime";
import { useState } from "react";
import { CardImage } from "../image/cardImage";
export const FolderCard = ({ data }) => {
  const [hover, setHover] = useState(false);
  return (
    <a href={data?.url} target="blank">
      <div
        className={`card ${hover ? "card-hover" : ""}`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <CardImage src={data?.imageSource} alt={data?.imageSource} />
        <div className="descriptionBox">
          <div className="timeText">{convertTime(data?.createdAt)}</div>
          <div className="cardDescription">{data?.description}</div>
          <div className="dateText">{formatDate(data?.createdAt)}</div>
        </div>
      </div>
    </a>
  );
};
