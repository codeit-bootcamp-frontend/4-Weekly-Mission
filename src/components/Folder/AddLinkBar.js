import "../../assets/styles/AddLinkBar.css";
import link from "../../assets/images/link.svg";

const AddLinkBar = () => {
  return (
    <header>
      <div className="header-add-container">
        <form className="add-form">
          <img id="add-icon" src={link} alt="add-icon" />
          <input
            className="add-bar"
            type="text"
            name="add-bar"
            placeholder="링크를 추가해 보세요."
          />
          <button className="add-button">추가하기</button>
        </form>
      </div>
    </header>
  );
};
export default AddLinkBar;
