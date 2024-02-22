import { useRef } from "react";
import "./AddRemoveButton.css";

export const AddRemoveButton = () => {
  const buttonRef = useRef();

  const handleButtonClick = () => {
    buttonRef.current.classList.toggle("on");
  };

  return (
    <div className="AddRemove">
      <button onClick={handleButtonClick}>...</button>
      <div className="AddRemove-menu" ref={buttonRef}>
        <button>삭제하기</button>
        <button>폴더에 추가</button>
      </div>
    </div>
  );
};
