import React from "react"
import ProfileImage from "assets/images/icon/profile-image.svg"
import * as S from "./ShareHeaderInfo.style"

function ShareHeaderInfo({ data }) {
  const profileImage = data?.folder?.owner?.profileImageSource || ProfileImage
  const name = data?.folder?.owner?.name || "이름 없음"
  const folderName = data?.folder?.name || "폴더 이름 없음"
  return (
    <React.Fragment>
      <S.Avatar src={profileImage} alt="" />
      <S.Name>{name}</S.Name>
      <S.Title>{folderName}</S.Title>
    </React.Fragment>
  )
}

export default ShareHeaderInfo
