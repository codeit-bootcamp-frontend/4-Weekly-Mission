import { useState } from "react";
import StyledDiv from "./StyledDiv";
import StyledDropdown from "./StyledDropdown";
import StyledOption from "./StyledOption";

function KebabButton({
  isHover,
  handleDeleteLinkModal,
  linkUrl,
  handleAddModal,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledDiv isHover={isHover} onClick={toggleDropdown}>
      <StyledDropdown isOpen={isOpen}>
        <StyledOption onClick={() => handleDeleteLinkModal(linkUrl)}>
          삭제하기
        </StyledOption>
        <StyledOption onClick={handleAddModal}>폴더에 추가</StyledOption>
      </StyledDropdown>
    </StyledDiv>
  );
}

export default KebabButton;
