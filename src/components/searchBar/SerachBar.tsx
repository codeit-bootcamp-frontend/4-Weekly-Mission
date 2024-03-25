import { ChangeEvent, InputHTMLAttributes } from "react"
import * as S from "./SearchBar.style"
import SearchIcon from "assets/images/icon/search.svg"
import ExitIcon from "assets/images/icon/modal_close.svg"

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onReset?: () => void
}

function SearchBar({ type, placeholder, name, value, onChange, onReset }: SearchBarProps) {
  return (
    <S.Search>
      <input type={type} placeholder={placeholder} name={name} className="input" value={value} onChange={onChange} />
      <S.SearchIcon src={SearchIcon} alt="" />
      {value && (
        <S.Cancel type="button" onClick={onReset}>
          <img src={ExitIcon} alt="입력한 값 지우기" />
        </S.Cancel>
      )}
    </S.Search>
  )
}

export default SearchBar
