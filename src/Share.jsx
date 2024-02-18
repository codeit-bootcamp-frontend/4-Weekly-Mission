import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.jsx";
import Main from "./component/Main.jsx";
import Footer from "./component/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
