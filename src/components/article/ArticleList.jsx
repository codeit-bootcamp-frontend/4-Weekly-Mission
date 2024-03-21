import React from "react"
import ArticleItem from "./ArticleItem"
import * as S from "./ArticleList.style"

function ArticleList({ data, onOpenModal, onChangeModalTitle, onChangeUrl }) {
  if (!data) return null
  return (
    <S.ArticleList>
      {data.map((link) => (
        <ArticleItem
          key={link.id}
          data={link}
          onOpenModal={onOpenModal}
          onChangeModalTitle={onChangeModalTitle}
          onChangeUrl={onChangeUrl}
        />
      ))}
    </S.ArticleList>
  )
}

export default ArticleList
