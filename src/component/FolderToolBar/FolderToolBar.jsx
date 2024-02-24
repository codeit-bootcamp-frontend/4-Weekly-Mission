import { useState, useEffect } from "react";
import { fetchFolders, fetchLinks } from "./fetchData";
import FolderButton from "./FolderButton/FolderButton";
import FolderCardList from "../FolderToolBar/FolderCardList/FolderCardList";
import { ALL } from "../../utils/utils";
import "./FolderToolBar.css";
import share from "../../images/share.svg";
import pen from "../../images/pen.svg";
import deleteIcon from "../../images/delete.svg";

const FolderToolBar = () => {
  const [buttons, setButtons] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedButtonName, setSelectedButtonName] = useState(ALL);

  useEffect(() => {
    fetchFolders()
      .then((data) => {
        setButtons(data);
        onFolderSelect(null, ALL);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const onFolderSelect = (folderId, folderName = ALL) => {
    setSelectedButtonName(folderName);
    fetchLinks(folderId)
      .then((data) => {
        setLinks(data);
      })
      .catch((error) => console.error("Error fetching links:", error));
  };

  return (
    <div className="container">
      <div className="button-container">
        <div className="folder-buttons">
          <FolderButton
            buttons={buttons}
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
