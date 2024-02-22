import { useState } from "react";
import StyledDiv from "./StyledDiv";
import StyledDropdown from "./StyledDropdown";
import StyledOption from "./StyledOption";

function KebabButton({ isHover }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mouseDeleteState, setMouseDeleteState] = useState("");
  const [mouseAddState, setMouseAddState] = useState("");

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleMouseOver = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "폴더에 추가") {
      setMouseAddState("over");
    } else {
      setMouseDeleteState("over");
    }
  };

  const handleMouseOut = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "폴더에 추가") {
      setMouseAddState("out");
    } else {
      setMouseDeleteState("out");
    }
  };
  return (
    <StyledDiv isHover={isHover} onClick={(e) => toggleDropdown(e)}>
      <StyledDropdown isOpen={isOpen}>
        <StyledOption
          mouse={mouseDeleteState}
          onMouseOut={(e) => handleMouseOut(e)}
          onMouseOver={(e) => handleMouseOver(e)}
        >
          삭제하기
        </StyledOption>
        <StyledOption
          mouse={mouseAddState}
          onMouseOut={(e) => handleMouseOut(e)}
          onMouseOver={(e) => handleMouseOver(e)}
        >
          폴더에 추가
        </StyledOption>
      </StyledDropdown>
    </StyledDiv>
  );
}

export default KebabButton;
