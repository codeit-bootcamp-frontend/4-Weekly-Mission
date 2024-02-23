import "./SelectedOption.css";

function SelectedOption({ selectedFolder, activeButton }) {
  return (
    <div className="Selected-folder">
      <span className="Selected-folder-name">{selectedFolder}</span>
      {activeButton !== "전체" && (
        <div className="Selected-option">
          <div className="Selected-option-content">
            <img src="images/share.svg" alt="공유 이미지" />
            <p>공유</p>
          </div>
          <div className="Selected-option-content">
            <img src="images/pen.svg" alt="이름 변경 이미지" />
            <p>이름 변경</p>
          </div>
          <div className="Selected-option-content">
            <img src="images/delete.svg" alt="삭제 이미지" />
            <p>삭제</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectedOption;
