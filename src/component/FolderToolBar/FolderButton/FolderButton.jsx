import { ALL } from "../../../utils/utils";
import "./FolderButton.css";

const FolderButton = ({
  folderNameData,
  onFolderSelect,
  selectedButtonName,
}) => {
  return (
    <>
      <button
        className={`folder-button ${
          selectedButtonName === ALL ? "selected" : ""
        }`}
        onClick={() => {
          onFolderSelect(ALL);
        }}
      >
        <span>{ALL}</span>
      </button>
      {folderNameData.map((button) => (
        <button
          key={button.id}
          className={`folder-button ${
            selectedButtonName === button.name ? "selected" : ""
          }`}
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
