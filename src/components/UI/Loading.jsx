import React from "react"
import Wrapper from "../layout/Wrapper"

import "./Loading.css"

function Loading() {
  return (
    <Wrapper className="loading-container">
      <div className="showbox">
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle
              className="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="4"
              strokeMiterlimit="10"
              stroke="#6D6AFE"
            />
          </svg>
        </div>
      </div>
    </Wrapper>
  )
}

export default Loading
