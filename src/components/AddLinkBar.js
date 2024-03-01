import "./AddLinkBar.css";
import link from "../assets/svg/link.svg";

function AddLinkBar() {
  return (
    <div className="add_bar">
      <div className="add_bar_inner">
        <form className="add">
          <img src={link} alt="" />
          <input className="add_bar_input" type="text" placeholder="링크를 추가해 보세요." />
          <button className="add_link_button">추가하기</button>
        </form>
      </div>
    </div>
  );
}

export default AddLinkBar;
