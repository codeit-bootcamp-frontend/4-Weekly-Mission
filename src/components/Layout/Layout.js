import { Fragment } from "react";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};
