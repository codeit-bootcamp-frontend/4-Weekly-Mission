import "./AddLink.css";
import Button from "./Button";
import linkImg from "../../assets/images/link.png";

function AddLink({ className }) {
  return (
    <form className={`AddLink ${className}`}>
      <input className="AddLink-input" placeholder="링크를 추가해 보세요" />
      <img className="AddLink-img" src={linkImg} />
      <Button className="AddLink-Button">추가하기</Button>
    </form>
  );
}

export default AddLink;
