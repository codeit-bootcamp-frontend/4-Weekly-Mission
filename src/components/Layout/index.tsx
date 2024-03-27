import { Fragment, ReactNode } from "react";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};
