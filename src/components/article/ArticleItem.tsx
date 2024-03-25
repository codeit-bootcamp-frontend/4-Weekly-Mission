import React from "react"
import Card from "components/UI/Card"
import { elapsedTimeCalc, momentFormat } from "utils/moment"

import * as S from "./ArticleItem.style"

import StarIcon from "assets/images/icon/star.svg"
import KebabIcon from "assets/images/icon/kebab.svg"
import defaultImage from "assets/images/no-image.jpg"
import useToggle from "hooks/useToggle"
import Select from "components/select/Select"
import useOutside from "hooks/useOutside"

interface ArticleItemProps {
  data: any
  onModalValueChanage: (modalValue: string) => void
  onChangeUrl: (url: string) => void
}

function ArticleItem({ data, onModalValueChanage, onChangeUrl }: ArticleItemProps) {
  const image = data.image_source || defaultImage
  const elapsedTime = elapsedTimeCalc(data.created_at)
  const date = momentFormat(data.created_at)

  const { toggle: isKebab, openToggleHandler, closeToggleHandler } = useToggle()
  const kebabRef = useOutside<HTMLUListElement>(isKebab, closeToggleHandler)
  const transformedUrl = data.url.includes("https") ? data.url : `https://www.${data.url}`

  return (
    <S.ArticleList>
      <Card tagName="article">
        <a href={transformedUrl} target="_blank" rel="noreferrer noopener">
          <S.Image>
            <S.BackgroundImage src={image} alt="" />
            <S.Star>
              <img src={StarIcon} alt="즐겨찾기" />
            </S.Star>
          </S.Image>
          <S.Contents>
            {isKebab && (
              <Select
                ref={kebabRef}
                onModalValueChanage={onModalValueChanage}
                url={transformedUrl}
                onChangeUrl={onChangeUrl}
              />
            )}
            <S.Kebab onClick={openToggleHandler}>
              <img src={KebabIcon} alt="모달창 열기" />
            </S.Kebab>
            <S.ElapsedTime>{elapsedTime}</S.ElapsedTime>
            <S.Description>{data.description}</S.Description>
            <S.Date>{date}</S.Date>
          </S.Contents>
        </a>
      </Card>
    </S.ArticleList>
  )
}

export default ArticleItem
