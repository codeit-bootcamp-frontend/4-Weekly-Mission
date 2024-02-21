import "./CardControl.css";
import share from "../../images/share.svg";
import pen from "../../images/pen.svg";
import Group from "../../images/Group 36.svg";
export function CardControl() {
  return (
    <div className="CardControl">
      <h2>유용한 글</h2>
      <div className="container">
        <div className="wrapper">
          <img alt="공유" src={share}></img>
          <p>공유</p>
        </div>
        <div className="wrapper">
          <img alt="이름변경" src={pen}></img>
          <p>이름 변경</p>
        </div>
        <div className="wrapper">
          <img alt="삭제" src={Group}></img>
          <p>삭제</p>
        </div>
      </div>
    </div>
  );
}
