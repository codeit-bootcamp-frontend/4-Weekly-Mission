import * as S from "./Logo.style"
import logoImage from "assets/images/logo.svg"
import { Link } from "react-router-dom"

function Logo() {
  return (
    <S.Logo>
      <Link to="/">
        <img src={logoImage} alt="메인 페이지 바로가기" />
      </Link>
    </S.Logo>
  )
}

export default Logo
