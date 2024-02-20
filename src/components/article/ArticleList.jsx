import React from "react"
import ArticleItem from "./ArticleItem"
import * as S from "./ArticleList.style"

function ArticleList({ data }) {
  return (
    <S.ArticleList>
      {data?.data.map((link) => (
        <ArticleItem key={link.id} data={link} />
      ))}
    </S.ArticleList>
  )
}

export default ArticleList
