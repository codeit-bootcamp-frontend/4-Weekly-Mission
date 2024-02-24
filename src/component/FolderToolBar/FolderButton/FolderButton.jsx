import { ALL } from "../../../utils/utils";
import "./FolderButton.css";

const FolderButton = ({ buttons, onFolderSelect, selectedButtonName }) => {
  return (
    <>
      <button
        className={selectedButtonName === ALL ? "selected" : ""}
        onClick={() => {
          onFolderSelect(null, ALL);
        }}
      >
        <span>전체</span>
      </button>
      {buttons.map((button) => (
        <button
          key={button.id}
          className={selectedButtonName === button.name ? "selected" : ""}
          onClick={() => {
            onFolderSelect(button.id, button.name);
          }}
        >
          <span>{button.name}</span>
        </button>
      ))}
    </>
  );
};
export default FolderButton;
