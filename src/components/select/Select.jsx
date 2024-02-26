import React from "react"
import * as S from "./Select.style"

const SELECT_TYPE = [
  { id: 1, title: "삭제하기" },
  { id: 2, title: "폴더에 추가" },
]

function Select() {
  return (
    <S.Select>
      {SELECT_TYPE.map((option, index) => (
        <S.Option key={option.id}>
          <S.Button $isPoint={SELECT_TYPE.length - 1 === index}>{option.title}</S.Button>
        </S.Option>
      ))}
    </S.Select>
  )
}

export default Select
