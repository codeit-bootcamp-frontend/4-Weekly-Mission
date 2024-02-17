import link from "../../images/link.png";
import "./AddLink.css";

function AddLink() {
  return (
    <div className="add-link-input-form">
      <img className="link-image" src={link} />
      <input className="add-link-input" placeholder="링크를 추가해 보세요" />

      <button className="btn cta add-button">추가하기</button>
    </div>
  );
}
export default AddLink;
