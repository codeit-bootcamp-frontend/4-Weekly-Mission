import "./Cards.css";
import { getDate, getElapsedTime } from "../utils";
import { useState } from "react";

function Card({ data }) {
  const [hover, setHover] = useState(false);
  const imageStyle = {
    backgroundColor: "lightgray 50%",
    backgroundImage: `url(${data.imageSource || "images/card-default.png"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card-image-area">
        <img
          className={"card-image " + (hover ? "hover-image" : "")}
          src={data.imageSource || "images/card-default.png"}
          alt="card"
        ></img>
      </div>
      <div className={"card-information-area " + (hover ? "hover-info" : "")}>
        <div className="card-time">
          {getElapsedTime(data.createdAt)}
          <img src="images/kebab.svg" alt="kebab" className="kebab"></img>
        </div>
        <div className="card-title">{data.title}</div>
        <div className="card-date">{getDate(data.createdAt)}</div>
      </div>
    </div>
  );
}

export default function Cards({ links = [] }) {
  return (
    <div className="card-container">
      {links.map((link) => (
        <Card key={link.id} data={link} />
      ))}
    </div>
  );
}
