import { useState } from "react";
import kebabImg from "./kebab.svg";
import "./kebab.css";

export const KebabMenu = () => {
  const [kebab, setKebab] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setKebab(!kebab);
  };

  return (
    <div>
      <img onClick={handleClick} src={kebabImg} alt="" />
      {kebab && (
        <div className="kebab_menu">
          <div>삭제하기</div>
          <div>폴더에 추가</div>
        </div>
      )}
    </div>
  );
};
