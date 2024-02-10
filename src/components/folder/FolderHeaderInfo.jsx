import React from "react"

import "./FolderInfo.css"

function FolderHeaderInfo({ data }) {
  return (
    <React.Fragment>
      <img src={data.folder.owner.profileImageSource} alt="" className="folderHeader-avatar" />
      <span className="folderHeader-name">{data.folder.owner.name}</span>
      <h2 className="folderHeader-title">{data.folder.name}</h2>
    </React.Fragment>
  )
}

export default FolderHeaderInfo
