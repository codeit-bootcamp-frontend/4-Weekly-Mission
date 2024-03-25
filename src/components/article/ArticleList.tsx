import React from "react"
import ArticleItem from "./ArticleItem"
import * as S from "./ArticleList.style"

interface ArticleListProps {
  data: any
  onModalValueChanage: (modaValue: string) => void
  onChangeUrl: (url: string) => void
}

function ArticleList({ data, onModalValueChanage, onChangeUrl }: ArticleListProps) {
  if (!data) return null
  return (
    <S.ArticleList>
      {data.map((link: any) => (
        <ArticleItem key={link.id} data={link} onModalValueChanage={onModalValueChanage} onChangeUrl={onChangeUrl} />
      ))}
    </S.ArticleList>
  )
}

export default ArticleList
