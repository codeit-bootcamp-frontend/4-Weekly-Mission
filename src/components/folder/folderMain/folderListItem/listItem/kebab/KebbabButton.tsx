import { MouseEvent, useEffect, useRef, useState } from "react";
import StyledDiv from "./StyledDiv";
import StyledDropdown from "./StyledDropdown";
import StyledOption from "./StyledOption";
import { MODAL_TYPE } from "../../../../../../util/commonText";
import KebabButtonProps from "../../../../../../@types/KebabButton";

function KebabButton({ linkUrl, onModal }: KebabButtonProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      if (!dropDownRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <StyledDiv ref={dropDownRef} onClick={toggleDropdown}>
      <StyledDropdown $isOpen={isOpen}>
        <StyledOption onClick={() => onModal(MODAL_TYPE.deleteLink, linkUrl)}>
          삭제하기
        </StyledOption>
        <StyledOption onClick={() => onModal(MODAL_TYPE.addFolder)}>
          폴더에 추가
        </StyledOption>
      </StyledDropdown>
    </StyledDiv>
  );
}

export default KebabButton;
