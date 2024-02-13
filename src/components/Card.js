import "./Cards.css";

import { getDate, getElapsedTime } from "../utils";
// import { useState } from "react";

export default function Card({ data }) {
  return (
    <div className="card">
      <div className="card-image-area">
        <img
          className={"card-image"}
          src={data.imageSource || "images/card-default.png"}
          alt="card"
        />
      </div>
      <div className={"card-information-area"}>
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
