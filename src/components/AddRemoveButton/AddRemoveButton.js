import { useRef } from "react";
import { ModalName } from "../../utils/constant";
import "./AddRemoveButton.css";

export const AddRemoveButton = ({
  setName,
  setOpenModal,
  setButtonColor,
  setButtonName,
  setFolderUrl,
  url,
}) => {
  const buttonRef = useRef();

  const handleButtonClick = () => {
    buttonRef.current.classList.toggle("on");
  };

  const handleModalClick = (type) => {
    setName(type.name);
    setOpenModal(true);
    setButtonColor(type.buttonColor);
    setButtonName(type.buttonName);
    setFolderUrl(url);
  };

  return (
    <div className="AddRemove">
      <button onClick={handleButtonClick}>...</button>
      <div className="AddRemove-menu" ref={buttonRef}>
        <button onClick={() => handleModalClick(ModalName.linkDelete)}>
          삭제하기
        </button>
        <button onClick={() => handleModalClick(ModalName.foldedrAdd)}>
          폴더에 추가
        </button>
      </div>
    </div>
  );
};
