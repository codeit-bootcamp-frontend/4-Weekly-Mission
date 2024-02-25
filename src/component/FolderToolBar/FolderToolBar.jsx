import FolderButton from "./FolderButton/FolderButton";
import FolderCardList from "../FolderToolBar/FolderCardList/FolderCardList";
import { ALL } from "../../utils/utils";
import "./FolderToolBar.css";
import share from "../../images/share.svg";
import pen from "../../images/pen.svg";
import deleteIcon from "../../images/delete.svg";

const FolderToolBar = ({
  folderNameData,
  links,
  selectedButtonName,
  onFolderSelect,
}) => {
  return (
    <div className="container">
      <div className="button-container">
        <div className="folder-buttons">
          <FolderButton
            folderNameData={folderNameData}
            onFolderSelect={onFolderSelect}
            selectedButtonName={selectedButtonName}
          />
        </div>
        <div className="add-button-container">
          <button className="add-button">
            <span>폴더 추가 +</span>
          </button>
        </div>
        <h2>{selectedButtonName}</h2>
        {selectedButtonName !== ALL && (
          <div className="icon-button-container">
            <button>
              <img src={share} alt="" />
            </button>
            <button>
              <img src={pen} alt="" />
            </button>
            <button>
              <img src={deleteIcon} alt="" />
            </button>
          </div>
        )}
      </div>
      <FolderCardList links={links} />
    </div>
  );
};

export default FolderToolBar;
