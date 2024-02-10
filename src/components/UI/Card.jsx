import React from "react"

import "./Card.css"

function Card({ className, children, tagName = "div" }) {
  const CustomTag = `${tagName}`
  return <CustomTag className={`${className || ""} card`}>{children}</CustomTag>
}

export default Card
