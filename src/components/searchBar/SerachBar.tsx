import { InputHTMLAttributes } from "react"
import * as S from "./SearchBar.style"
import searchImage from "assets/images/icon/search.svg"

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: any
}

function SearchBar({ type, placeholder, name, value, onChange }: SearchBarProps) {
  return (
    <S.Search>
      <input type={type} placeholder={placeholder} name={name} className="input" value={value} onChange={onChange} />
      <S.SearchIcon>
        <img src={searchImage} alt="" />
      </S.SearchIcon>
    </S.Search>
  )
}

export default SearchBar
