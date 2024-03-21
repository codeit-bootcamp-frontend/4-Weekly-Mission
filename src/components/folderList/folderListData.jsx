import { useEffect, useState } from "react";
import FolderData from "./FolderData";
import { getFolderList, getLinks } from "../../apis/folderApi";
import CardList from "../../components/card/CardList";

import "./FolderListData.css";

function FolderListData() {
  const [cards, setCards] = useState([]);
  const [folderData, setFolderData] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("전체"); // 선택된 폴더 이름 상태 추가

  useEffect(() => {
    const fetchFolderData = async () => {
      //folder List 가져오기
      const data = await getFolderList(1); // 사용자 ID를 1로 지정
      setFolderData(data);
    };

    const fetchData = async () => {
      //folder 페이지 card 가쟈오기
      const data = await getLinks(1);
      setCards(data);
    };

    fetchData();
    fetchFolderData();
  }, []);

  return (
    <>
      <article className="folderCardPage--content">
        <ul className="folderList">
          <li
            className={`folderData ${
              selectedFolder === "전체" ? "selected" : ""
            }`}
            onClick={() => setSelectedFolder("전체")}
          >
            전체
          </li>
          {folderData.map(({ id, name }) => (
            <FolderData
              key={id}
              name={name}
              onClick={() => setSelectedFolder(name)} // 이름 클릭 시 선택된 폴더로 업데이트
              selected={selectedFolder === name}
            />
          ))}
        </ul>
        <h1 className="folderCard--title">{selectedFolder}</h1>
        <CardList cards={cards} />
      </article>
    </>
  );
}

export default FolderListData;
