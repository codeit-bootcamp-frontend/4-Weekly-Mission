// AddBar 컴포넌트
import "./AddBar.css";

export const AddBar = () => {
  return (
    <div className="AddBar">
      <div className="AddBar-container">
        <input className="AddBar-input" placeholder="링크를 추가해 보세요." />
        <button className="Add-button">추가하기</button>
      </div>
    </div>
  );
};
