import React from "react"

import * as S from "./Profile.style"
import defaultImage from "assets/images/icon/avatar.svg"

function Profile({ data }) {
  const image = data.image_source || defaultImage

  return (
    <S.Profile>
      <S.Image src={image} alt="프로필 이미지" />
      <S.Email>{data.email}</S.Email>
    </S.Profile>
  )
}

export default Profile
