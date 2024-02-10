import React from "react"

import "./FolderCardList.css"
import FolderCardItem from "./FolderCardItem"

function FolderCardList({ data }) {
  const { links } = data.folder
  return (
    <ul className="folderCardList">
      {links.map((link) => (
        <FolderCardItem key={link.id} data={link} />
      ))}
    </ul>
  )
}

export default FolderCardList
