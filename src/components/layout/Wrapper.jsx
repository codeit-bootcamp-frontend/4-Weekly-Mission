import React from "react"
import "./Wrapper.css"

function Wrapper({ children, className = "" }) {
  return <div className={`${className} container`}>{children}</div>
}

export default Wrapper
