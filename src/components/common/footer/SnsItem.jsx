import React from "react"

function FooterSnsItem({ sns }) {
  return (
    <li>
      <a href={sns.href} target="_blank" rel="noopener noreferrer">
        <img src={sns.image} alt={sns.alt} />
      </a>
    </li>
  )
}

export default FooterSnsItem
