import "./LinkBar.css";

function LinkBar() {
  return (
    <div className="LinkBar">
      <div className="LinkBar-item">
        <img
          src="./images/link.svg"
          alt="링크 아이콘"
          className="LinkBar-icon"
        />
        <input
          className="LinkBar-input"
          type="text"
          placeholder="링크를 추가해 보세요"
        />
        <button className="LinkBar-button">추가하기</button>
      </div>
    </div>
  );
}

export default LinkBar;
