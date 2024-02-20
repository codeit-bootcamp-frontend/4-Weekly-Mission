import "./App.css";
import "./common.css";
import "../colors.css";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
