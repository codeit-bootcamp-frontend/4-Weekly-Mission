import React from "react"
import * as S from "./ShareSearchBar.style"
import searchImage from "assets/images/icon/search.svg"

function ShareSearchBar({ type, placeholder, name }) {
  return (
    <S.Search>
      <input type={type} placeholder={placeholder} name={name} className="input" />
      <S.SearchIcon>
        <img src={searchImage} alt="" />
      </S.SearchIcon>
    </S.Search>
  )
}

export default ShareSearchBar
