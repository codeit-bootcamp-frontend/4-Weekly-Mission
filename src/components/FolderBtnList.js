import "./FolderBtnList.css";
import addImg from "../assets/add.svg";

export default function FolderBtnList() {
  return (
    <div className="FolderBtnList">
      <div className="FolderBtn">
        <button>전체</button>
        <button>⭐️ 즐겨찾기</button>
        <button>코딩 팁</button>
        <button>채용 사이트</button>
        <button>유용한 글</button>
        <button>나만의 장소</button>
      </div>
      <div className="AddFolder">
        <span>폴더 추가</span>
        <img src={addImg} alt="폴더 추가 버튼" />
      </div>
    </div>
  );
}
