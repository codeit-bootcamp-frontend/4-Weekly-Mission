import React from "react"
import "./ShareInfo.css"

function ShareHeaderInfo({ data }) {
  return (
    <React.Fragment>
      <img src={data.folder.owner.profileImageSource} alt="" className="shareHeader-avatar" />
      <span className="shareHeader-name">{data.folder.owner.name}</span>
      <h2 className="shareHeader-title">{data.folder.name}</h2>
    </React.Fragment>
  )
}

export default ShareHeaderInfo
