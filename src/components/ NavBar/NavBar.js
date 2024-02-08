import { Fragment } from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Fragment>
      <nav>
        <div className="nav">
          <a href="./index.html">
            <img src="./images/landing/logo.png" alt="Linkbrary 로고" />
          </a>

          <a className="login-btn" href="./html/signIn.html">
            로그인
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
