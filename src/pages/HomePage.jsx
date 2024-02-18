import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <p className="information_msg">메인 페이지 추가 예정입니다.</p>
      <div className="link_container">
        <Link to="/shared">
          <button className="link_page_button">Folder Shared Page</button>
        </Link>
        <Link to="/folder">
          <button className="link_page_button">Folder Page</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
