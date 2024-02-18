import "./LinkAddBar.css";
import linkIcon from "../../assets/link-icon.png";

function LinkAddBar() {
  return (
    <div className="LinkAddBar">
      <div className="container">
        <img className="link_icon" src={linkIcon} alt="link icon" />
        링크를 추가해보세요
        <button className="link_add_button">추가하기</button>
      </div>
    </div>
  );
}

export default LinkAddBar;
