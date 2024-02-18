import "../style/sorting.css";
import addImg from "../assets/add.png";
function Sorting() {
  return (
    <div className="sorting-container">
      <div className="sortingBtn-container">
        <button className="sortingBtn">전체</button>
        <button className="sortingBtn">⭐️즐겨찾기</button>
        <button className="sortingBtn">코딩 팁</button>
        <button className="sortingBtn">채용 사이트</button>
        <button className="sortingBtn">유용한 글</button>
        <button className="sortingBtn">나만의 장소</button>
      </div>
      <button className="addFolder">
        <p className="addFolderText">폴더 추가</p>
        <img src={addImg} alt="addFolder" />
      </button>
    </div>
  );
}
export default Sorting;
