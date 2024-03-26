import { useState, useEffect } from "react";
import { getUsersLink } from "../../apis/Api";
import Cards from "../Cards/Cards";
import shareIcon from "../../assets/share.svg";
import penIcon from "../../assets/pen.svg";
import deleteIcon from "../../assets/delete.svg";
import addIcon from "../../assets/add.svg";
import "./FolderItem.css";

interface Props {
  usersFolderData: any;
  searchKeyword: any;
}

function FolderItem({ usersFolderData, searchKeyword }: Props) {
  const [selectedFolder, setSelectedFolder] = useState({ id: 1, name: "전체" });
  const [cardList, setCardList] = useState([]);
  const folderList = [{ id: 1, name: "전체" }, ...usersFolderData];

  const handleFolderClick = (data: any) => {
    setSelectedFolder(data);
  };

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
          <button className="addFolder">
            <p>폴더 추가</p>
            <img src={addIcon} alt="폴더 추가"></img>
          </button>
        </div>
        <div className="optionBar">
          <h1 className="folderTitle">{selectedFolder.name}</h1>
          {selectedFolder.name === "전체" ? (
            ""
          ) : (
            <div className="optionList">
              <button className="option">
                <img src={shareIcon} alt="공유" />
                <span>공유</span>
              </button>
              <button className="option">
                <img src={penIcon} alt="이름 변경" />
                <span>이름 변경</span>
              </button>
              <button className="option">
                <img src={deleteIcon} alt="삭제" />
                <span>삭제</span>
              </button>
            </div>
          )}
        </div>
        <Cards
          cardList={cardList}
          showStarKebab
          searchKeyword={searchKeyword}
        />
      </div>
    </div>
  );
}

export default FolderItem;
