import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <Link to="/shared">
        <button className="link_page_button">Shared Page</button>
      </Link>

      <Link to="/folder">
        <button className="link_page_button">Folder Page</button>
      </Link>
    </div>
  );
}

export default Home;
