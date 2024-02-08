import "./css/Header.css";

const Header = () => {
  return (
    <header>
      <img alt="Linkbrary logo" src="images/Linkbrary_small_logo.png" />
      <button className="btn_gradient login">로그인</button>
    </header>
  );
};

export default Header;
