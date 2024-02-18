import React from "react"
import CardItem from "./CardItem"
import * as S from "./CardList.style"

function CardList({ data }) {
  return (
    <S.CardList>
      {data?.data.map((link) => (
        <CardItem key={link.id} data={link} />
      ))}
    </S.CardList>
  )
}

export default CardList
