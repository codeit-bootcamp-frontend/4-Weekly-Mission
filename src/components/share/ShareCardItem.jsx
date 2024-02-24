import React from "react"
import defaultImage from "assets/images/no-image.jpg"
import { elapsedTimeCalc, momentFormat } from "utils/moment"
import Card from "components/UI/Card"
import "./ShareCardItem.css"

function ShareCardItem({ data }) {
  const image = data.imageSource || defaultImage
  const elapsedTime = elapsedTimeCalc(data.createdAt)
  const date = momentFormat(data.createdAt)

  return (
    <li className="shareCardItem">
      <Card tagName="article">
        <a href={data.url} target="_blank" rel="noreferrer noopener">
          <div className="shareCardItem-image">
            <img src={image} alt="" />
          </div>
          <div className="shareCardItem-contents">
            <span className="shareCardItem-elapsedTime">{elapsedTime}</span>
            <p className="shareCardItem-description">{data.description}</p>
            <span className="shareCardItem-date">{date}</span>
          </div>
        </a>
      </Card>
    </li>
  )
}

export default ShareCardItem
