import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import CardList from "./CardList";
import Footer from "./Footer";
import Home from "../pages/home";
import Shared from "../pages/shared";
import Folder from "../pages/folder";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/folder" element={<Folder />} />
        </Routes>
      </Router>
      {/* <Header />
      <Main />
      <CardList />
      <Footer /> */}
    </div>
  );
}

export default App;
