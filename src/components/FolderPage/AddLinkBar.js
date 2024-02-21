import "./AddLinkBar.css";
import linkIcon from "../../assets/linkIcon.svg";

const AddLink = () => {
  return (
    <div className="addLinkContainer">
      <form className="addLinkForm">
        <label htmlFor="linkInput" className="hiddenLabel">
          링크를 추가해보세요.
        </label>
        <img src={linkIcon} alt="link icon" />
        <input
          type="text"
          id="linkInput"
          placeholder="링크를 추가해 보세요."
          className="addLinkInput"
        />
        <button>추가하기</button>
      </form>
    </div>
  );
};

export default AddLink;
