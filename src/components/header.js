import "../css/home.css";
import logo from "../image/logo.svg";

function Header() {
  fetch("https://bootcamp-api.codeit.kr/api/sample/user", {
    method: "GET",
  })
    .then((response) => {
      return response.text();
    })
    .then((result) => {
      const Email = JSON.parse(result);
      const EmailValue = Email.email;
      console.log(EmailValue);
    });
  return (
    <>
      <header className="top">
        <nav id="top_div">
          <img className="logo_img" src={logo} alt="로고 이미지" />
          <a className="login_btn btn" href="./">
            로그인
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
