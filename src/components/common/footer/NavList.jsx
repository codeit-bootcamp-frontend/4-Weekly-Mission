import React from "react"
import FooterNavItem from "./NavItem"

const NAV_LIST = [
  { id: 1, href: "/privacy", title: "Privacy Policy" },
  { id: 2, href: "/faq", title: "FAQ" },
]

function FooterNavList() {
  return (
    <ul className="footer-nav">
      {NAV_LIST.map((navList) => (
        <FooterNavItem item={navList} key={navList.id} />
      ))}
    </ul>
  )
}

export default FooterNavList
