import { Link } from 'react-router-dom';
import '../styles/Main.css';

const Main = () => {

  return (
    <main className="temporary-main">
      <div className="temporary-container">
        <Link to="/folder">
          <a className="temporary button-gradient">folder 페이지 바로가기</a>
        </Link>
        <Link to="/shared">
          <a className="temporary button-gradient">shared 페이지 바로가기</a>
        </Link>
      </div>
    </main>
  );
}

export default Main;