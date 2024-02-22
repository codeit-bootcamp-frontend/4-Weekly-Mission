import "./LinkAdd.css";
import link from "../images/link.svg";
import { useState } from "react";

function LinkAdd({ isModalOpen, toggleModal }) {
  const [inputValue, setInputInput] = useState("");

  function handleInputChange(event) {
    setInputInput(event.target.value);
  }

  function handleAddButtonClick(event) {
    event.preventDefault();
    if (inputValue !== "") {
      toggleModal();
    }
  }

  return (
    <>
      {isModalOpen && (
        <header>
          <div className="Link-Add">
            <form className="Link-Add-Form">
              <div className="Link-Add-Form-Div">
                <img src={link} alt="링크"></img>
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="링크를 추가해 보세요"
                ></input>
                <button onClick={handleAddButtonClick}>추가하기</button>
              </div>
            </form>
          </div>
        </header>
      )}
    </>
  );
}
export default LinkAdd;
