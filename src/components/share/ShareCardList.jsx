import React from "react"
import ShareCardItem from "./ShareCardItem"
import * as S from "./ShareCardList.style"

function ShareCardList({ data }) {
  const { links } = data.folder
  return (
    <S.CardList>
      {links.map((link) => (
        <ShareCardItem key={link.id} data={link} />
      ))}
    </S.CardList>
  )
}

export default ShareCardList
