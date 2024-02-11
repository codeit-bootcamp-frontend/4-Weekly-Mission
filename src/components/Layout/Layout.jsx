import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ForderOwner from "../PersonalFolder/Banner/FolderOwner";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ForderOwner />
      {children.map((child, index) => (
        <React.Fragment key={index}> {child}</React.Fragment>
      ))}
      <Footer />
    </>
  );
};

export default Layout;
