import React from "react";
import { Link } from "react-router-dom";
import "../style/landing.css";

function Landing() {
  return (
    <div className="landing-container">
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
