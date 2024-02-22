import "./LinkAdd.css";
import link from "../images/link.svg";

function LinkAdd() {
  return (
    <header>
      <div className="Link-Add">
        <form className="Link-Add-Form">
          <div className="Link-Add-Form-Div">
            <img src={link} alt="링크"></img>
            <input placeholder="링크를 추가해 보세요"></input>
            <button>추가하기</button>
          </div>
        </form>
      </div>
    </header>
  );
}
export default LinkAdd;
