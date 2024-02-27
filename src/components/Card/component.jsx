import "./style.css";
import { useState } from "react";
import { getDate, getElapsedTime } from "../../utils";
import Popover from "../Popover";

export default function Card({ data }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className="card">
      <div className="card-image-area">
        <img
          className={"card-image"}
          src={data.image_source || "images/card-default.png"}
          alt="card"
        />
        <img className="card-star" src="images/star.svg" alt="star" />
      </div>
      <div className={"card-information-area"}>
        <div className="card-time">
          {getElapsedTime(data.created_at)}
          <button onClick={() => setIsPopoverOpen(true)}>
            <img src="images/kebab.svg" alt="kebab" className="kebab" />
          </button>
        </div>
        {/* <div ref={popoverRef}> */}
        {isPopoverOpen && (
          <Popover data={data} onClose={() => setIsPopoverOpen(false)} />
        )}
        {/* </div> */}
        <div className="card-title">{data.title}</div>
        <div className="card-date">{getDate(data.created_at)}</div>
      </div>
    </div>
  );
}
