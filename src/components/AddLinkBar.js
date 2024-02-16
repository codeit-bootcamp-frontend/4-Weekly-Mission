import "./AddLinkBar.css";
import linkIcon from "../assets/linkIcon.svg";

const AddLink = () => {
  return (
    <div className="addLinkContainer">
      <form className="addLinkForm">
        <img src={linkIcon} alt="link icon" />
        <input
          type="text"
          placeholder="링크를 추가해 보세요."
          className="addLinkInput"
        />
        <button>추가하기</button>
      </form>
    </div>
  );
};

export default AddLink;
