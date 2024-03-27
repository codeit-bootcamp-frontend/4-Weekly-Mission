import styled from "styled-components";
import searchIcon from "../../assets/icons/icon_search.png";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";

const Input = ({ setInputValue, inputValue, onEnterButtonHandle }) => {
  const onClickDeleteButtonHandle = () => {
    setInputValue("");
  };

  const onKeyPressHandle = (e) => {
    if (e.key === "Enter") {
      onEnterButtonHandle();
    }
  };

  return (
    <div id="search-bar">
      <img src={searchIcon} alt="searchIcon"></img>
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={onKeyPressHandle}
      />
      <DeleteAllButton onClick={() => onClickDeleteButtonHandle()}>
        <Delete />
      </DeleteAllButton>
    </div>
  );
};

const DeleteAllButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 999px;
  border: none;
  background-color: #ccd5e3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 767px) {
    width: 29px;
    height: 25px;
  }
`;

export default Input;
