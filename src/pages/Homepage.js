import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>홈페이지 입니다</h1>

      <ul style={{ fontSize: "50px" }}>
        <Link to="/shared">
          <li>Shared 페이지로</li>
        </Link>

        <Link to="/folder">
          <li>folder 페이지로</li>
        </Link>
      </ul>
    </div>
  );
}

export default Homepage;
