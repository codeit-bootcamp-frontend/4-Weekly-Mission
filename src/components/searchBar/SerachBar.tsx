import React, { InputHTMLAttributes } from "react"
import * as S from "./SearchBar.style"
import searchImage from "assets/images/icon/search.svg"

function SearchBar({ type, placeholder, name }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <S.Search>
      <input type={type} placeholder={placeholder} name={name} className="input" />
      <S.SearchIcon>
        <img src={searchImage} alt="" />
      </S.SearchIcon>
    </S.Search>
  )
}

export default SearchBar
