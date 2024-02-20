import { Link } from "react-router-dom";
import "./Main.css";
function Main() {
  return (
    <>
      <h1>메인 페이지</h1>
      <Link className="page" to="/folder">
        폴더 페이지
      </Link>
      <Link className="page" to="/shared">
        공유 페이지
      </Link>
    </>
  );
}

export default Main;
