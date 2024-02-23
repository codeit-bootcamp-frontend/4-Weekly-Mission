import "./InputSection.css";
import linkImg from "../../images/link.svg";

const InputSection = () => {
  return (
    <div className="input-section">
      <form className="input-form">
        <div className="input-box">
          <img src={linkImg} alt="" />
          <input className="input" placeholder="링크를 추가해보세요" />
        </div>
        <button className="link-button" type="submit">
          <div className="cta">추가하기</div>
        </button>
      </form>
    </div>
  );
};

export default InputSection;
