import { useEffect, useState } from "react";
import { getFolderList, getAllLinks, getFolderLink } from "../api";
import SearchBar from "./SearchBar";
import addImg from "../assets/add.svg";
import shareIcon from "../assets/share.svg";
import penIcon from "../assets/pen.svg";
import deleteIcon from "../assets/delete.svg";
import "./FolderSection.css";

export default function FolderSection() {
  const [folderName, setFolderName] = useState("");
  const [folderList, setFolderList] = useState([]);
  const [cardList, setCardList] = useState([]);

  async function getAllList() {
    try {
      const { data } = await getAllLinks();
      setCardList(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function folderAllNameClick(e) {
    setFolderName(e.target.textContent);
    await getAllList();
  }

  // const folderAllNameClick = (e) => {
  //   setFolderName(e.target.textContent);
  //   getAllList();
  // };

  const folderNameClick = (e) => {
    setFolderName(e.target.textContent);
  };

  useEffect(() => {
    async function getList() {
      try {
        const { data } = await getFolderList();
        setFolderList(data);
      } catch (error) {
        console.error(error);
      }
    }

    getList();
  }, []);

  return (
    <div className="FolderSection">
      <div className="FolderSection-Frame">
        <SearchBar />
        <div className="FolderBtnList">
          <div className="FolderBtn">
            <button onClick={folderAllNameClick}>전체</button>
            {folderList.map(({ name, id }) => {
              return (
                <button key={id} onClick={folderNameClick}>
                  {name}
                </button>
              );
            })}
          </div>
          <div className="AddFolder">
            <span>폴더 추가</span>
            <img src={addImg} alt="폴더 추가 버튼" />
          </div>
        </div>
        <div className="FolderNameBar">
          <span>{folderName}</span>
          <div className="OptionIcon">
            <img src={shareIcon} alt="공유 아이콘" />
            <span>공유</span>
            <img src={penIcon} alt="이름 변경 아이콘" />
            <span>이름 변경</span>
            <img src={deleteIcon} alt="삭제 아이콘" />
            <span>삭제</span>
          </div>
        </div>
      </div>
    </div>
  );
}
