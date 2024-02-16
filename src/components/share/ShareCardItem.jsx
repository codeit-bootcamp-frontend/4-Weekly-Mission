import React from "react"
import defaultImage from "assets/images/no-image.jpg"
import { elapsedTimeCalc, momentFormat } from "utils/moment"
import Card from "components/UI/Card"

import * as S from "./ShareCardItem.style"

function ShareCardItem({ data }) {
  const image = data.imageSource || defaultImage
  const elapsedTime = elapsedTimeCalc(data.createdAt)
  const date = momentFormat(data.createdAt)

  return (
    <S.CardList>
      <Card tagName="article">
        <a href={data.url} target="_blank" rel="noreferrer noopener">
          <S.Image>
            <img src={image} alt="" />
          </S.Image>
          <S.Contents>
            <span className="elapsedTime">{elapsedTime}</span>
            <p className="description">{data.description}</p>
            <span className="date">{date}</span>
          </S.Contents>
        </a>
      </Card>
    </S.CardList>
  )
}

export default ShareCardItem
