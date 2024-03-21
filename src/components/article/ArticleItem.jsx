import React, { useEffect, useRef } from "react"
import Card from "components/UI/Card"
import { elapsedTimeCalc, momentFormat } from "utils/moment"

import * as S from "./ArticleItem.style"

import StarIcon from "assets/images/icon/star.svg"
import KebabIcon from "assets/images/icon/kebab.svg"
import defaultImage from "assets/images/no-image.jpg"
import useToggle from "hooks/useToggle"
import Select from "components/select/Select"

function ArticleItem({ data, onOpenModal, onChangeModalTitle, onChangeUrl }) {
  const image = data.image_source || defaultImage
  const elapsedTime = elapsedTimeCalc(data.created_at)
  const date = momentFormat(data.created_at)

  const { toggle: isKebab, toggleHandler: kebabToggleHandler } = useToggle()
  const kebabRef = useRef()

  useEffect(() => {
    const handleCloseKekbab = (event) => {
      if (isKebab && kebabRef.current && !kebabRef.current.contains(event.target)) {
        kebabToggleHandler()
      }
    }

    document.addEventListener("mousedown", handleCloseKekbab)
    return () => {
      document.removeEventListener("mousedown", handleCloseKekbab)
    }
  }, [isKebab, kebabToggleHandler])

  return (
    <S.ArticleList>
      <Card tagName="article">
        <a href={data.url} target="_blank" rel="noreferrer noopener">
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
                onOpenModal={onOpenModal}
                onChangeModalTitle={onChangeModalTitle}
                url={data.url}
                onChangeUrl={onChangeUrl}
              />
            )}
            <S.Kebab onClick={kebabToggleHandler}>
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
