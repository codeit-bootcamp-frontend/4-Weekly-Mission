import { Fragment } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
