import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing">
      <h1>Landing page</h1>
      <div>
        <div>
          <Link to="shared">shared 페이지</Link>
        </div>
        <div>
          <Link to="folder">folder 페이지</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
