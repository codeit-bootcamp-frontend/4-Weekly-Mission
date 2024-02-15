import React from "react"
import "./Profile.css"
import defaultImage from "assets/images/icon/avatar.svg"

function Profile({ data }) {
  const image = data.profileImageSource || defaultImage

  return (
    <div className="header-profile">
      <div className="header-profile__image">
        <img src={image} alt="프로필 이미지" />
      </div>
      <span className="header-profile__email">{data.email}</span>
    </div>
  )
}

export default Profile
