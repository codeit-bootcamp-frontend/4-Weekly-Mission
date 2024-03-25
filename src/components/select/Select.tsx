import React, { ForwardedRef, forwardRef, MouseEvent } from "react"
import * as S from "./Select.style"

const SELECT_TYPE = [
  { id: 1, title: "삭제하기" },
  { id: 2, title: "폴더에 추가" },
]

type SelectProps = {
  url: string
  onModalValueChanage: (modalValue: string) => void
  onChangeUrl: (url: string) => void
}

function Select(props: SelectProps, ref: ForwardedRef<HTMLUListElement>) {
  const { onModalValueChanage, url, onChangeUrl } = props
  const deleteLinkHandler = (event: MouseEvent, title: string) => {
    event.preventDefault()

    onModalValueChanage(title)
    onChangeUrl(url)
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
