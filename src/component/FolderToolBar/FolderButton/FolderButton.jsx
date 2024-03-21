import { ALL } from "../../../utils/utils";
import "./FolderButton.css";
import classNames from "classnames";

const FolderButton = ({
  folderNameData,
  onFolderSelect,
  selectedButtonName,
}) => {
  return (
    <>
      <button
        className={classNames(
          "folder-button",
          selectedButtonName === ALL && "selected"
        )}
        onClick={() => {
          onFolderSelect(ALL);
        }}
      >
        <span>{ALL}</span>
      </button>
      {folderNameData.map((button) => (
        <button
          key={button.id}
          className={classNames(
            "folder-button",
            selectedButtonName === button.name && "selected"
          )}
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
