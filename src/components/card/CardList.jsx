import React from "react"
import CardItem from "./CardItem"
import * as S from "./CardList.style"
import AlertBanner from "components/UI/AlertBanner"

function CardList({ data, alertMessage }) {
  if (data?.data.length === 0) {
    return <AlertBanner type="info">{alertMessage}</AlertBanner>
  }

  return (
    <S.CardList>
      {data?.data.map((link) => (
        <CardItem key={link.id} data={link} />
      ))}
    </S.CardList>
  )
}

export default CardList
