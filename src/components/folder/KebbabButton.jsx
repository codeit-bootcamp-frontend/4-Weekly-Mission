import styled, { css } from "styled-components";
import kebabImg from "../../assets/img/png/kebab.png";
import { useState } from "react";

const Button = styled.div`
  background-image: url(${kebabImg});
  background-size: 21px 17px;
  background-repeat: no-repeat;
  width: 21px;
  border: none;
  background-color: white;
  position: relative;
`;
const Dropdown = styled.div`
  position: absolute;
  top: 25px;
  right: -80px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px;
  z-index: 10;

  @media (max-width: 390px) {
    right: 0px;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 12px;
  ${({ mouse }) =>
    mouse === "over"
      ? css`
          background-color: #e7effb;
        `
      : css`
          background-color: white;
        `}
`;

function KebabButton() {
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
    <Button onClick={(e) => toggleDropdown(e)}>
      <Dropdown isOpen={isOpen}>
        <Option
          mouse={mouseDeleteState}
          onMouseOut={(e) => handleMouseOut(e)}
          onMouseOver={(e) => handleMouseOver(e)}
        >
          삭제하기
        </Option>
        <Option
          mouse={mouseAddState}
          onMouseOut={(e) => handleMouseOut(e)}
          onMouseOver={(e) => handleMouseOver(e)}
        >
          폴더에 추가
        </Option>
      </Dropdown>
    </Button>
  );
}

export default KebabButton;
