import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Link to={"/folder"}>
        <button>홈</button>
      </Link>
      <Link to={"/login"}>
        <button>로그인</button>
      </Link>
    </div>
  );
};

export default Main;
