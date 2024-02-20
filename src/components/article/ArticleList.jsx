import React from "react"
import CardItem from "./ArticleItem"
import * as S from "./ArticleList.style"
import AlertBanner from "components/UI/AlertBanner"

function ArticleList({ data, alertMessage }) {
  if (data?.data.length === 0) {
    return <AlertBanner type="info">{alertMessage}</AlertBanner>
  }

  return (
    <S.ArticleList>
      {data?.data.map((link) => (
        <CardItem key={link.id} data={link} />
      ))}
    </S.ArticleList>
  )
}

export default ArticleList
