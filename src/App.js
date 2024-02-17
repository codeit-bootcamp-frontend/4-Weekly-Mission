import React from "react";
import HeaderNavigation from "./components/HeaderNavigation";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./reset.css";
import Folder from "./components/folder";
function App() {
  return (
    <div>
      <HeaderNavigation />
      <Folder />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
