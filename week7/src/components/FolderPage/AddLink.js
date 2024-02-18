import "./AddLink.css";
import link from "../../assets/link.png";
function AddLink() {
  return (
    <div className="link-add-container">
      <form className="link-add-form">
        <label>
          <img className="link-icon" src={link} alt="링크 아이콘" />
          <input className="link-add-input" />
          <button className="add-btn">추가하기</button>
        </label>
      </form>
    </div>
  );
}
export default AddLink;
