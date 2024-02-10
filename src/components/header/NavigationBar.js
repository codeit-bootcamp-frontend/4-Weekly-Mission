import "./NavigationBar.css";
import logoImg from "../../assets/logo.png";

function NavigationBar() {
  return (
    <div className="NavigationBar">
      <div className="container">
        <a href="#">
          <img src={logoImg} alt="logo" />
        </a>
        <button href="#" className="login_button">
          로그인
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
