import imgSrc from "../assets/Search.png";
import "../components/Header.css";
import { useMediaQuery } from "react-responsive";
import closeImg from "../assets/close.png";

interface InputProps {
  linkInput?: string;
  handleChangeInput?: (data: string) => void;
}

function Input({ linkInput, handleChangeInput }: InputProps) {
  const handleResetLink = () => {
    if (handleChangeInput) {
      handleChangeInput("");
    }
  };
  const handleChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (handleChangeInput) {
      handleChangeInput(e.target.value);
    }
  };
  const isTablet = useMediaQuery({ maxWidth: 1199 });

  return (
    <div className={isTablet ? "search-tablet-box" : "search-box"}>
      <form>
        <label>
          <img className="search-img" src={imgSrc} alt="검색" />
          <input
            value={linkInput}
            onChange={handleChangeLink}
            className={isTablet ? "search-tablet" : "search"}
            placeholder="링크를 검색해 보세요."
          ></input>
          <img
            onClick={handleResetLink}
            className="close-img"
            src={closeImg}
            alt="지우기"
          />
        </label>
      </form>
    </div>
  );
}

export default Input;
