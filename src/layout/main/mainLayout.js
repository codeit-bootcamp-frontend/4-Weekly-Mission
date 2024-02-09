import React from "react";
import "./mainLayout.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const MainLayout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};
