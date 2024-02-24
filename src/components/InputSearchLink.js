import { useState } from "react";
import linkSearchIcon from "../img/linkSearchIcon.svg";

function InputSearchLink({ handleSearchInputChange }) {
  const [isInputValue, setIsInputValue] = useState("");

  const handleChange = (e) => {
    // 이부분이 잘 안돌아가는거같아요 ㅠㅠ 상위 컴포넌트로 value값을 보내고싶은데 input값이 변경되기만 하면 handleSearchInputChange 어쩌구하면서 에러가 뜹니다.
    const value = e.target.value;
    e.preventDefault();
    setIsInputValue(value);
    handleSearchInputChange(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="container__searchForm">
        <img
          className="container__searchForm--icon"
          src={linkSearchIcon}
          alt="LinkSearchIcon"
        />
        <input
          className="container__searchForm--input"
          placeholder="링크를 검색해 보세요"
          value={isInputValue}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </form>
    </>
  );
}

export default InputSearchLink;
