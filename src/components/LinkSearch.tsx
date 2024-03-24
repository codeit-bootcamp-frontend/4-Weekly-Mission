import "./LinkSearch.css";
import search from "../images/Search.png";
import close from "../images/_close.png";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

function LinkSearch({ setKeywords }: { setKeywords: any }) {
  const [value, setValue] = useState("");
  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const targetInput = target.children[1] as HTMLInputElement;
    setKeywords(targetInput.value);
  }
  function handleCancelButtonClick(e: MouseEvent) {
    e.preventDefault();
    setKeywords("");
    setValue("");
  }
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return (
    <form onSubmit={handleSearch} className="link-search-container">
      <button className="search-button">
        <img src={search} alt="search" />
      </button>
      <input
        className="link-search"
        type="text"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleCancelButtonClick} className="close-button">
        <img src={close} alt="close" />
      </button>
    </form>
  );
}
export default LinkSearch;
