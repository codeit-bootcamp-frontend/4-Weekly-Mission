import "./LinkAdd.css";
import link from "../images/link.svg";
import { useState } from "react";

interface ToggleModal {
  toggleModal: (id: number) => void;
}

function LinkAdd({ toggleModal }: ToggleModal) {
  const [inputValue, setInputInput] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputInput(event.target.value);
  }

  function handleAddButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (inputValue !== "") {
      toggleModal(6);
    }
  }

  return (
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
  );
}
export default LinkAdd;
