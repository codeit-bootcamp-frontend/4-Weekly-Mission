import React, { useEffect, useRef } from "react"
import Card from "components/UI/Card"
import { elapsedTimeCalc, momentFormat } from "utils/moment"

import * as S from "./ArticleItem.style"

import StarIcon from "assets/images/icon/star.svg"
import KebabIcon from "assets/images/icon/kebab.svg"
import defaultImage from "assets/images/no-image.jpg"
import useToggle from "hooks/useToggle"
import Select from "components/select/Select"

interface ArticleItemProps {
  data: any
  onOpenModal: () => void
  onChangeModalTitle: (title: string) => void
  onChangeUrl: (url: string) => void
}

function ArticleItem({ data, onOpenModal, onChangeModalTitle, onChangeUrl }: ArticleItemProps) {
  const image = data.image_source || defaultImage
  const elapsedTime = elapsedTimeCalc(data.created_at)
  const date = momentFormat(data.created_at)

  const { toggle: isKebab, toggleHandler: kebabToggleHandler } = useToggle()
  const kebabRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleCloseKekbab = (event: MouseEvent) => {
      if (isKebab && kebabRef.current && !(kebabRef.current as any).contains(event.target)) {
        kebabToggleHandler(event)
      }
    }

    document.addEventListener("mousedown", handleCloseKekbab)
    return () => {
      document.removeEventListener("mousedown", handleCloseKekbab)
    }
  }, [isKebab, kebabToggleHandler])

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
                onOpenModal={onOpenModal}
                onChangeModalTitle={onChangeModalTitle}
                url={transformedUrl}
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
