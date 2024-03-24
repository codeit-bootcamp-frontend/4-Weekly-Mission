import "./Main.css";
import "../components/common.css";
import "../colors.css";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
