import "./GuideButton.css";

export const GuideButtonNav = () => {
  return (
    <div className="image_board_back">
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
    </div>
  );
};
