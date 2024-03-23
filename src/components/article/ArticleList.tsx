import React from "react"
import ArticleItem from "./ArticleItem"
import * as S from "./ArticleList.style"

interface ArticleListProps {
  data: any
  onOpenModal: () => void
  onChangeModalTitle: (title: string) => void
  onChangeUrl: (url: string) => void
}

function ArticleList({ data, onOpenModal, onChangeModalTitle, onChangeUrl }: ArticleListProps) {
  if (!data) return null
  return (
    <S.ArticleList>
      {data.map((link: any) => (
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
