import React from "react"
import Card from "components/UI/Card"
import { elapsedTimeCalc, momentFormat } from "utils/moment"

import * as S from "./CardItem.style"

import StarIcon from "assets/images/icon/star.svg"
import KebabIcon from "assets/images/icon/kebab.svg"
import defaultImage from "assets/images/no-image.jpg"
import useToggle from "hooks/useToggle"
import Select from "components/select/Select"

function CardItem({ data }) {
  const image = data.image_source || defaultImage
  const elapsedTime = elapsedTimeCalc(data.created_at)
  const date = momentFormat(data.created_at)

  const { toggle, toggleHandler } = useToggle()

  return (
    <S.CardList>
      <Card tagName="article">
        <a href={data.url} target="_blank" rel="noreferrer noopener">
          <S.Image>
            <S.BackgroundImage src={image} alt="" />
            <S.Star>
              <img src={StarIcon} alt="즐겨찾기" />
            </S.Star>
          </S.Image>
          <S.Contents>
            {toggle && <Select />}
            <S.Kebab onClick={toggleHandler}>
              <img src={KebabIcon} alt="모달창 열기" />
            </S.Kebab>
            <span className="elapsedTime">{elapsedTime}</span>
            <p className="description">{data.description}</p>
            <span className="date">{date}</span>
          </S.Contents>
        </a>
      </Card>
    </S.CardList>
  )
}

export default CardItem
