import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Profile from "../PersonalFolder/Banner/Profile";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children.map((child, index) => (
        <React.Fragment key={index}> {child}</React.Fragment>
      ))}
      <Footer />
    </>
  );
};

export default Layout;
