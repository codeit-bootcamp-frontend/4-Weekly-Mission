import React from "react"
import linkbraryImage from "../../assets/images/linkbrary.jpg"
import { elapsedTimeCalc, momentFormat } from "../../utils/moment"

import "./FolderCardItem.css"
import Card from "../UI/Card"

function FolderCardItem({ data }) {
  const defaultImage = data.imageSource ? data.imageSource : linkbraryImage
  const elapsedTime = elapsedTimeCalc(data.createdAt)
  const date = momentFormat(data.createdAt)
  return (
    <li className="folderCardItem">
      <Card tagName="article">
        <a href={data.url} target="_blank" rel="noreferrer noopener">
          <div className="folderCardItem-image">
            <img src={defaultImage} alt="" />
          </div>
          <div className="folderCardItem-contents">
            <span className="folderCardItem-elapsedTime">{elapsedTime}</span>
            <p className="folderCardItem-description">{data.description}</p>
            <span className="folderCardItem-date">{date}</span>
          </div>
        </a>
      </Card>
    </li>
  )
}

export default FolderCardItem
