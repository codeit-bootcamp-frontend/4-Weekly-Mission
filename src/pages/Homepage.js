import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="Homepage">
      <Link to="/shared">
        <button>SharedPage</button>
      </Link>
      <Link to="/folder">
        <button>FolderPage</button>
      </Link>
    </div>
  );
}

export default Homepage;
