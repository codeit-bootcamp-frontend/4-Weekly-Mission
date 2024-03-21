import React, { forwardRef } from "react"
import * as S from "./Select.style"

const SELECT_TYPE = [
  { id: 1, title: "삭제하기" },
  { id: 2, title: "폴더에 추가" },
]

function Select(props, ref) {
  const { onOpenModal, onChangeModalTitle, url, onChangeUrl } = props
  const deleteLinkHandler = (event, title) => {
    event.preventDefault()

    onChangeModalTitle(title)
    onChangeUrl(url)
    onOpenModal()
  }

  return (
    <S.Select ref={ref}>
      {SELECT_TYPE.map((option, index) => (
        <S.Option key={option.id}>
          <S.Button
            $isPoint={SELECT_TYPE.length - 1 === index}
            onClick={(event) => deleteLinkHandler(event, option.title)}
          >
            {option.title}
          </S.Button>
        </S.Option>
      ))}
    </S.Select>
  )
}

export default forwardRef(Select)
