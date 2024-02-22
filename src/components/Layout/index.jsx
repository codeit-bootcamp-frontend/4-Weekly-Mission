import { React, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children.map((child, index) => (
        <Fragment key={index}> {child}</Fragment>
      ))}
      <Footer />
    </>
  );
};

export default Layout;
