import { useState } from "react";
import "./FolderButton.css";

const FolderButton = ({ buttons, onFolderSelect }) => {
  const [selectedButtonName, setSelectedButtonName] = useState("전체");

  return (
    <>
      <button
        className={selectedButtonName === null ? "selected" : ""}
        onClick={() => {
          onFolderSelect(null);
          setSelectedButtonName("전체");
        }}
      >
        <span>전체</span>
      </button>
      {buttons.map((button) => (
        <button
          key={button.id}
          className={selectedButtonName === button.id ? "selected" : ""}
          onClick={() => {
            onFolderSelect(button.id);
            setSelectedButtonName(button.name);
          }}
        >
          <span>{button.name}</span>
        </button>
      ))}
      <h2>{selectedButtonName}</h2>
    </>
  );
};

export default FolderButton;
