import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Link to="/shared">
        <p>shared</p>
      </Link>
      <Link to="/folder">
        <p>folder</p>
      </Link>
    </div>
  );
}
export default Landing;
