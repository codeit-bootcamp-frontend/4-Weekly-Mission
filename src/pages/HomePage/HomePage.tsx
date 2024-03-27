import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      Home 페이지
      <ul>
        <li>
          <Link to="folder">폴더 페이지 이동</Link>
        </li>
        <li>
          <Link to="shared">공유 페이지 이동</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
