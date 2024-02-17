import "./Classification.css";

export function Classification() {
  return (
    <div className="classification">
      <div className="classification-buttons">
        <button>전체</button>
        <button>⭐즐겨찾기</button>
        <button>코딩 팁</button>
        <button>채용 사이트</button>
        <button>유용한 글</button>
        <button>나만의 장소</button>
      </div>
      <button className="add-folder-button">폴더 추가 +</button>
    </div>
  );
}
