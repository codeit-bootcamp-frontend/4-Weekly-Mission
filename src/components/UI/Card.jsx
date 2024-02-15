import React from "react"

import "./Card.css"

function Card({ className, children, tagName: Tag = "div" }) {
  return <Tag className={`${className || ""} card`}>{children}</Tag>
}

export default Card
