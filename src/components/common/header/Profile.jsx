import React from "react"
import "./Profile.css"

function Profile({ data }) {
  return (
    <div className="header-profile">
      <div className="header-profile__image">
        <img src={data.profileImageSource} alt="프로필 이미지" />
      </div>
      <span className="header-profile__email">{data.email}</span>
    </div>
  )
}

export default Profile
