import { ALL } from "../../../utils/utils";
import { folderToolBarProps } from "../../../interfaces/folder.interface";
import "./FolderButton.css";
import classNames from "classnames";

const FolderButton = ({
  folderData,
  onFolderSelect,
  selectedButtonName,
}: folderToolBarProps) => {
  return (
    <>
      <button
        className={classNames(
          "folder-button",
          selectedButtonName === ALL && "selected"
        )}
        onClick={() => {
          onFolderSelect?.(ALL);
        }}
      >
        <span>{ALL}</span>
      </button>
      {folderData.map((button) => (
        <button
          key={button.id}
          className={classNames(
            "folder-button",
            selectedButtonName === button.name && "selected"
          )}
          onClick={() => {
            onFolderSelect && onFolderSelect(button.id, button.name);
          }}
        >
          <span>{button.name}</span>
        </button>
      ))}
    </>
  );
};
export default FolderButton;
