import { useState, ChangeEvent } from "react";
import "./AddLinkBar.css";
import { ADD_ICON } from "./constant";
import { AddToFolder } from "../../../../components/Modals/AddToFolder";
import { FolderListDataForm } from "interface/DataForm";

export function AddLinkBar({ data }: { data: FolderListDataForm[] }) {
  const [inputValue, setInputValue] = useState<string>();
  const [isEmpty, setIsEmpty] = useState(false);
  const [isShowAddToFolder, setIsAddToFolder] = useState(false);

  const handleEmptyError = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsEmpty(e.target.value === "" ? true : false);
  };

  const handleAddToFolder = () => {
    setIsAddToFolder(true);
  };

  const handleCloseAddToFolder = () => {
    setIsAddToFolder(false);
  };

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="add-link">
      <div className={!isEmpty ? "add-link-bar" : "add-link-bar-error"}>
        <div className="add-link-icon-input">
          <img
            className="add-link-icon"
            src={ADD_ICON}
            alt="링크 추가하기 아이콘"
          />
          <input
            className="add-link-input"
            type="text"
            placeholder="링크를 추가해 보세요"
            onBlur={handleEmptyError}
            onChange={handleInputValue}
          />
        </div>
        <button
          className="add-link-button"
          onClick={handleAddToFolder}
          disabled={isEmpty}
        >
          {" "}
          추가하기{" "}
        </button>
        {isShowAddToFolder && (
          <AddToFolder
            isOpenModal={isShowAddToFolder}
            handleModalClose={handleCloseAddToFolder}
            linkURL={inputValue}
            data={data}
          />
        )}
      </div>
    </div>
  );
}
