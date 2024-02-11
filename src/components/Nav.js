import { useEffect, useState } from "react";
import { getLinksUser } from "../apiEmail";
import logo from "../image/logo.png";
import "../css/Nav.css";

function Navs() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    const nextlogin = getLinksUser();
    nextlogin.then((data) => {
      setLogin(data);
    });
  }, []);

  if (!login) {
    return (
      <a href="/html/signup.html" target="_self" className="loginBtn">
        로그인
      </a>
    );
  }

  return (
    <nav>
      <div className="gnb">
        <a href="/html/index.html" target="_self">
          <img className="logo" src={logo} alt="Linkbrary 로고"></img>
        </a>
        <div className="login">
          <img
            className="loginImg"
            src={login.profileImageSource}
            alt={login.name}
          ></img>
          <span className="emailname">{login.email}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navs;
