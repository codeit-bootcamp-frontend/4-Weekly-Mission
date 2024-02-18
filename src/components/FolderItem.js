import { useState, useEffect } from "react";
import { getUsersLink } from "./Api";
import Card from "./Card";
import shareIcon from "../assets/share.svg";
import penIcon from "../assets/pen.svg";
import deleteIcon from "../assets/delete.svg";
import addIcon from "../assets/add.svg";
import "./styles/FolderItem.css";

function FolderItem({ usersFolderData }) {
  const folderList = [{ id: 1, name: "전체" }, ...usersFolderData];

  const OPTION_LIST = [
    {
      id: 1,
      name: "공유",
      src: shareIcon,
    },
    {
      id: 2,
      name: "이름 변경",
      src: penIcon,
    },
    {
      id: 3,
      name: "삭제",
      src: deleteIcon,
    },
  ];

  const [selectedFolder, setSelectedFolder] = useState({ id: 1, name: "전체" });

  const handleFolderClick = (data) => {
    setSelectedFolder(data);
  };

  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const getFolderData = async () => {
      try {
        const card = await getUsersLink(
          selectedFolder.name === "전체" ? "" : `?folderId=${selectedFolder.id}`
        );
        setCardList(card.data);
      } catch (error) {
        console.log(error);
      }
    };

    getFolderData();
  }, [selectedFolder]);

  return (
    <div className="FolderItem">
      <div className="folderItemContainer">
        <div className="folderListBar">
          <div className="folderList">
            {folderList.map((data) => (
              <button
                key={data.id}
                onClick={() => handleFolderClick(data)}
                className={
                  selectedFolder.name === data.name
                    ? "selectedFolder"
                    : "folderButton"
                }
              >
                {data.name}
              </button>
            ))}
          </div>
          <div className="addFolder">
            <p>폴더 추가</p>
            <img src={addIcon}></img>
          </div>
        </div>
        <div className="optionBar">
          <h1 className="folderTitle">{selectedFolder.name}</h1>
          {selectedFolder.name === "전체" ? (
            ""
          ) : (
            <div className="optionList">
              {OPTION_LIST.map((option) => (
                <div className="option" key={option.id}>
                  <img src={option.src} alt={option.name} />
                  <p>{option.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <Card cardList={cardList} />
      </div>
    </div>
  );
}

export default FolderItem;
