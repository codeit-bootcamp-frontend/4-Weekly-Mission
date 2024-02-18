import "./GuideButton.css";
import { GuideButtonNav } from "./GuideButtonNav";

export const GuideButton = () => {
  return (
    <div className="image_board_back">
      <GuideButtonNav />
      <nav className="img_board_nav">
        <div className="img_nav_text">유용한 글</div>
        <div>
          <button className="nav_edit">♥︎ 공유</button>
          <button className="nav_edit">✎ 이름 변경</button>
          <button className="nav_edit">🗑️ 삭제</button>
        </div>
      </nav>
    </div>
  );
};
