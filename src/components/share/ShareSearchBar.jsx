import React from "react"
import "./ShareSearchBar.css"
import searchImage from "assets/images/icon/search.svg"

function ShareSearchBar({ type, placeholder, name }) {
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

export default ShareSearchBar
