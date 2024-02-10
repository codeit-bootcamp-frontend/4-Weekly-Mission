import React from "react"

function FooterNavItem({ item }) {
  return (
    <li>
      <a href={item.href}>{item.title}</a>
    </li>
  )
}

export default FooterNavItem
