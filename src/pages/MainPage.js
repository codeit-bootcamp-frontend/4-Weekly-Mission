import { Link } from 'react-router-dom';
import '../styles/Main.css';

const MainPage = () => {

  return (
    <main className="temporary-main">
      <div className="temporary-container">
        <Link to="/folder" className="temporary button-gradient">
          folder 페이지 바로가기
        </Link>
        <Link to="/shared" className="temporary button-gradient">
          shared 페이지 바로가기
        </Link>
      </div>
    </main>
  );
}

export default MainPage;