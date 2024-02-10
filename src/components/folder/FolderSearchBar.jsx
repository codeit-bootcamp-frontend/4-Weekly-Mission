import React from "react"
import "./FolderSearchBar.css"
import searchImage from "../../assets/images/icon/search.svg"

function FolderSearchBar({ type, placeholder, name }) {
  return (
    <React.Fragment>
      <div className="search">
        <input type={type} placeholder={placeholder} name={name} className="search-input" />
        <div className="search-icon">
          <img src={searchImage} alt="" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default FolderSearchBar
