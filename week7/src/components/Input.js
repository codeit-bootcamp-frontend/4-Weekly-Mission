import imgSrc from "../assets/Search.png";
import "../components/Header.css";
import { useMediaQuery } from "react-responsive";
function Input() {
  const isTablet = useMediaQuery({ maxWidth: 1199 });
  return (
    <div className={isTablet ? "search-tablet-box" : "search-box"}>
      <img className="search-img" src={imgSrc} alt="검색" />
      <input
        className={isTablet ? "search-tablet" : "search"}
        placeholder="링크를 검색해 보세요."
      ></input>
    </div>
  );
}

export default Input;
