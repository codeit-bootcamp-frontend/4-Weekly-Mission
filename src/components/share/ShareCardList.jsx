import React from "react"
import ShareCardItem from "./ShareCardItem"
import "./ShareCardList.css"

function ShareCardList({ data }) {
  const { links } = data.folder
  return (
    <ul className="shareCardList">
      {links.map((link) => (
        <ShareCardItem key={link.id} data={link} />
      ))}
    </ul>
  )
}

export default ShareCardList
