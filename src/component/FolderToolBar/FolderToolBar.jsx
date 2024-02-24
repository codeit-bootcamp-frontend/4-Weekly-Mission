import { useState, useEffect } from "react";
import FolderButton from "./FolderButton/FolderButton";
import FolderCardList from "../FolderToolBar/FolderCardList/FolderCardList";
import "./FolderToolBar.css";
import share from "../../images/share.svg";
import pen from "../../images/pen.svg";
import deleteIcon from "../../images/delete.svg";

const FolderToolBar = () => {
  const [buttons, setButtons] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedButtonName, setSelectedButtonName] = useState("전체");

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/users/1/folders")
      .then((response) => response.json())
      .then((data) => {
        setButtons(data.data);
        onFolderSelect(null, "전체");
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const onFolderSelect = (folderId, folderName = "전체") => {
    const baseUrl = "https://bootcamp-api.codeit.kr/api/users/1/links";
    const url = folderId ? `${baseUrl}?folderId=${folderId}` : baseUrl;
    setSelectedButtonName(folderName);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLinks(data.data);
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
        {selectedButtonName !== "전체" && (
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
