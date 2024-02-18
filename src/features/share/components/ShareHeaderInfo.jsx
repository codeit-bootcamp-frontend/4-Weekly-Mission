import React from "react"

import * as S from "./ShareHeaderInfo.style"

function ShareHeaderInfo({ data }) {
  return (
    <React.Fragment>
      <S.Avatar src={data.folder.owner.profileImageSource} alt="" />
      <S.Name>{data.folder.owner.name}</S.Name>
      <S.Title>{data.folder.name}</S.Title>
    </React.Fragment>
  )
}

export default ShareHeaderInfo
