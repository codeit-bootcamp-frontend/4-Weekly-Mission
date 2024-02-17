import { useSearchParams } from "react-router-dom";
import { FolderData } from "../api/api";
import "../css/folder.css";
import FolderItemList from "./folderItem";
import { useState } from "react";
// import { FolderData } from "../api/api";

function FolderPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("keyword");
  const [keyword, setKetword] = useState(initKeyword || "");
  const folders = FolderData(initKeyword);

  const handlePlusChange = (e) => {
    setKetword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(keyword ? { keyword } : {});
  };

  return (
    <main>
      <div className="first_page_back">
        <form className="link_back" onChange={handleSubmit}>
          <button className="plus_btn btn">추가하기</button>
          <input
            className="link plus_link"
            type="text"
            placeholder="링크를 추가해 보세요."
            value={keyword}
            onChange={handlePlusChange}
          />
        </form>
      </div>
      <div className="image_board_back">
        <div className="link_back search">
          <input
            className="link search_link"
            type="t;3ext"
            placeholder="링크를 검색해 보세요."
          />
        </div>
        <nav className="img_board_nav">
          <div className="nav_btns">
            <button className="nav_btn">전체</button>
            <button className="nav_btn">⭐️ 즐겨찾기</button>
            <button className="nav_btn">코딩 팁</button>
            <button className="nav_btn">채용 사이트</button>
            <button className="nav_btn">유용한 글</button>
            <button className="nav_btn">나만의 장소</button>
          </div>
          <button className="folder_plus_btn">폴더 추가 +</button>
        </nav>
        <nav className="img_board_nav">
          <div className="img_nav_text">유용한 글</div>
          <div>
            <button className="nav_edit">♥︎ 공유</button>
            <button className="nav_edit">✎ 이름 변경</button>
            <button className="nav_edit">🗑️ 삭제</button>
          </div>
        </nav>
        <FolderItemList />
      </div>
    </main>
  );
}

export default FolderPage;
