import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function Apps() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Apps;
