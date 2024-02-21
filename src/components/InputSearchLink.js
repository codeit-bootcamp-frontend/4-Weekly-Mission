import LinkSearchIcon from "../img/LinkSearchIcon.svg";
import { useState } from "react";

function InputSearchLink() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form className="container__searchForm">
        <img
          className="container__searchForm--icon"
          src={LinkSearchIcon}
          alt="LinkSearchIcon"
        />
        <input
          className="container__searchForm--input"
          placeholder="링크를 검색해 보세요"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default InputSearchLink;
